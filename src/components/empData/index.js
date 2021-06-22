import React, { Component } from "react";
import EmpTable from "../EmpTable"
import API from "../../utils/API"


class EmpData extends Component {
    state = {
      search: "",
      emps: [],
      filteredEmps: [],
      sortDir: this.initSortDir,
    };
  
    get initSortDir() {
      return {
        name: "",
        phone: "",
        email: "",
        location: "",
      };
    }
  
    // When this component mounts, load random users as employees from API
    componentDidMount() {
      API.getEmp()
        .then((response) =>
          this.setState({
            emps: response.data.results,
            filteredEmps: response.data.results,
          }),
        )
        .catch((err) => console.log(err));
    }
  
    // Update search state to filter by employee name
    handleInputChange = (event) => {
      const value = event.target.value;
      this.setState({ search: value });
      this.filterEmp(value.toLowerCase().trim());
    };
  
    handleFormSubmit = (event) => {
      event.preventDefault();
    };
  
    // sorting with key key of object.
    //source from a cool article about sorting columns  
          //https://www.smashingmagazine.com/2020/03/sortable-tables-react/
    sortBy = (key, primary = 0, secondary = 0) => {
      let sortedEmp = this.state.filteredEmps;
      if (this.state.sortDir[key]) {
        this.setState({
          filteredEmps: sortedEmp.reverse(),
          sortDir: {
            ...this.initSortDir,
            [key]: this.state.sortDir[key] === "asc" ? "desc" : "asc",
          },
        });
      } else {
        sortedEmp = this.state.filteredEmps.sort((a, b) => {
          a = a[key];
          b = b[key];
  
          // If first search criteria matches sort by secondary
          //Like names, sorting by last names, if they are the same look at first names
          if (primary) {
            if (secondary && a[primary] === b[primary]) {
              return a[secondary].localeCompare(b[secondary]);
            }
            return a[primary].localeCompare(b[primary]);
          } else {
            return a.localeCompare(b);
          }
        });
  
        this.setState({
          filteredEmps: sortedEmp,
          sortDir: {
            ...this.initSortDir,
            [key]: "asc",
          },
        });
      }
    };
  
    filterEmp = (input) => {
      if (input) {
        this.setState({
          filteredEmps: this.state.employees.filter((emp) => {
            return (
              emp.name.first
                .toLowerCase()
                .concat(" ", emp.name.last.toLowerCase())
                .includes(input) ||
              emp.phone.includes(input) ||
              emp.phone.includes(input) ||
              emp.email.includes(input) ||
              emp.location.city
              .toLowerCase()
              .concat(" ", emp.location.state.toLowerCase())
              .includes(input)
            );
          }),
        });
      } else {
        this.setState({ filteredEmps: this.state.employees });
      }
    };

    render() {
        return (
            <>
            <div className="container mt-4">
              <EmpTable
                  state={this.state}
                  sortBy={this.sortBy}
                  filterEmp={this.filterEmp}
              />
            </div>
            </>
        )
    }
  };

export default EmpData;
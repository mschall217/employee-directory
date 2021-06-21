import React, {Component } from "react";
import Nav from "../Nav"
import EmpCard from "../EmpCard"
import API from "../../utils/API"


class EmpData extends Component {
    state = {
      search: "",
      emps: [],
      filteredEmp: [],
      sortDir: this.initialSortDir,
    };
  
    get initialSortDir() {
      return {
        name: "",
        phone: "",
        email: "",
        location: "",
      };
    }
  
    // When this component mounts, load random users as employees from https://randomuser.me/
    componentDidMount() {
      API.getEmp()
        .then((res) =>
          this.setState({
            emps: res.data.results,
            filteredEmps: res.data.results,
          })
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
  
    // Sort with the key of specified object.
    // If key has more than one option sort by primary and optionally a secondary i.e. sort by last name, then first.
    sortBy = (key, primary = 0, secondary = 0) => {
      let sortedEmp = this.state.filteredEmp;
      if (this.state.sortDir[key]) {
        this.setState({
          filteredEmp: sortedEmp.reverse(),
          sortDir: {
            ...this.initialSortDir,
            [key]: this.state.sortDir[key] === "asc" ? "desc" : "asc",
          },
        });
      } else {
        sortedEmp = this.state.filteredEmp.sort((a, b) => {
          a = a[key];
          b = b[key];
  
          // If primary comparison is equal, sort by secondary
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
          filteredEmp: sortedEmp,
          sortDir: {
            ...this.initialSortDir,
            [key]: "asc",
          },
        });
      }
    };
  
    filterEmp = (input) => {
      if (input) {
        this.setState({
          filteredEmp: this.state.employees.filter((emp) => {
            return (
              emp.name.first
                .toLowerCase()
                .concat(" ", emp.name.last.toLowerCase())
                .includes(input) ||
              emp.phone.includes(input) ||
              emp.phone.replace(/[^\w\s]/gi, "").includes(input) ||
              emp.email.includes(input) ||
              emp.location.city
              .toLowerCase()
              .concat(" ", emp.location.state.toLowerCase())
              .includes(input)
            );
          }),
        });
      } else {
        this.setState({ filteredEmp: this.state.employees });
      }
    };

    render() {
        return (
            <>
            <Nav 
              value={this.state.search}
              handleInputChange={this.handleInputChange}
              handleFormSubmit={this.handleFormSubmit}
            />
            <div className="container mt-4">
              <EmpCard
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
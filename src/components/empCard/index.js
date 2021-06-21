import React from "react";
import "./style.css"

const EmpCard = (props) => {
  return (
    <table className="table table-striped table-sortable text-center">
      <thead>
        <tr>
          <th scope="col">Image</th>
          <th scope="col" data-field="name" data-sortable="true">
            <span onClick={() => props.sortBy("name", "last", "first")}>
              Name
            </span>
          </th>
          <th scope="col">
            <span onClick={() => props.sortBy("phone")}>Phone</span>
          </th>
          <th scope="col">
            <span onClick={() => props.sortBy("email")}>Email</span>
          </th>
          <th scope="col">
            <span onClick={() => props.sortBy("location", "state")}>Location</span>
          </th>
        </tr>
      </thead>
      <tbody>
        {props.state.filteredEmp.map((emp) => {
          const { first, last } = emp.name;
          const fullName = `${first} ${last}`;

          const { city, state } = emp.location;
          const location = `${city}, ${state}`;


          return (
            <tr key={emp.login.uuid}>
              <td>
                <img src={emp.picture.thumbnail} alt={fullName} />
              </td>
              <td className="align-middle">{fullName}</td>
              <td className="align-middle">
              <a href={`tel:+1${emp.phone}`}>{emp.phone}</a></td>
              <td className="align-middle email">
                <a href={`mailto:${emp.email}`}>{emp.email}</a>
              </td>
              <td className="align-middle">{location}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default EmpCard;
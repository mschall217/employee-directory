import React from "react";
import "./style.css"

const EmpCard = (props) => {
    return(
		<table>
			<thead>
				<tr>
					<th scope="col">Image</th>
					<th scope="col" data-field="name" data-sortable="true">
						<span onClick={() => props.sortBy("name", "first", "last")}>Name</span>
					</th>
					<th scope="col">
						<span onClick={() => props.sortBy("phone")}>Phone</span>					
					</th>
					<th scope="col">
						<span onClick={() => props.sortBy("email")}>Email</span>					
					</th>
					<th scope="col">
						<span onClick={() => props.sortBy("location", "city", "state")}>Place</span>					
					</th>
				</tr>
			</thead>
			<tbody>
				{props.state.filterEmployee.map((employee) => {
					const { first, last } = employee.name;
					const fullName = `${first} ${last}`;

					const { city, state } = employee.location;
					const location = `${city}, ${state}`;

					return(
						<tr>
							<td>
								<img src={employee.picture.thumbnail} />
							</td>
							<td>
								{fullName}
							</td>
							<td>
								<a href={`tel:+1${employee.phone}`}>{employee.phone}</a>
							</td>
							<td>
								<a href={`mailto:${employee.email}`}>{employee.email}</a>
							</td>
							<td>
								{location}
							</td>
						</tr>
					)
				})}
			</tbody>
		</table>
	)
}

export default EmpCard;
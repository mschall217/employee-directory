import React from "react";
import "./style.css";

//takes props and sets up each employees "card" on the table 
const EmpCard = (props) => {
	//created sortable clickable columns referenced in an article also tagged in empData
	//https://www.smashingmagazine.com/2020/03/sortable-tables-react/
	return (
		<table className="table table-striped table-sortable text-center">
			<thead>
				<tr>
					<th scope="col">Profile</th>
					<th scope="col" data-field="name" data-sortable="true">
						<span onClick={() => props.sortBy("name", "last", "first")}>
							Name
						</span>
					</th>
					<th scope="col">
						<span onClick={() => props.sortBy("phone")}>
              				Phone Number
            			</span>
					</th>
					<th scope="col">
						<span onClick={() => props.sortBy("email")}>
              				Email
           				 </span>
					</th>
					<th scope="col">
						<span onClick={() => props.sortBy("location", "state")}>
							Location
						</span>
					</th>
				</tr>
			</thead>
			<tbody>


				{props.state.filteredEmps.map((emp) => {
					//maping the array, we take the emp data from the API join the first and last name 
					const { first, last } = emp.name;
					const fullName = `${first} ${last}`;
					//join their city and state to create a basic location 
					const { city, state } = emp.location;
					const location = `${city}, ${state}`;
					// then we are return their indvidual row for every employee we asked the API for (20)
					return (
						<tr>
							<td>
								<img src={emp.picture.thumbnail} alt={fullName} />
							</td>
							<td className="align-middle">
                				{fullName}
              				</td>
							<td className="align-middle">
							  {emp.phone}
							</td>
							<td className="align-middle email">
								<a href={`mailto:${emp.email}`}>{emp.email}</a>
							</td>
							<td className="align-middle">
                				{location}
              				</td>
						</tr>
					);
				})}
			</tbody>
		</table>
	);
};

export default EmpCard;

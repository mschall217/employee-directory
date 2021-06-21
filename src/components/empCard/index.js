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
						<span onClick={() => props.sortBy("place", "city", "state")}>Place</span>					
					</th>
				</tr>
			</thead>
			<tbody>
				
			</tbody>
		</table>

	)
}

export default EmpCard;
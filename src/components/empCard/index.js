import React from "react";
import "./style.css"

const EmpCard = (props) => {
    return(
        <tr>
		      <th scope="row">1</th>
		      <td class="w-25">
			      <img src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/sheep-3.jpg" class="img-fluid img-thumbnail" alt="Sheep"></img>
		      </td>
		      <td>{props.fistName} {props.lastName}</td>
		      <td>{props.email}</td>
		      <td>{props.phone}</td>
		      <td>{props.city}, {props.state}</td>
		</tr>
    )
}

export default EmpCard;
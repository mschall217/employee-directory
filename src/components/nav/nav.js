import React from "react";
import "./style.css";

const nav = (props) => {

    return(
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <form class="form-inline my-2 my-lg-0" onSubmit={props.handleFormSubmit}>
      <input 
      class="form-control mr-sm-2" 
      type="search" 
      placeholder="Search" 
      aria-label="Search"
      value={props.value}
      onChange={props.handleInputChange}
      />
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
</nav>
    )
}

export default nav;
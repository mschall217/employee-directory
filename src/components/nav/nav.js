import React from "react";
import "./style.css";

const nav = (props) => {

    return(
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <form className="form-inline my-2 my-lg-0" onSubmit={props.handleFormSubmit}>
      <input 
      className="form-control mr-sm-2" 
      type="search" 
      placeholder="Search" 
      aria-label="Search"
      value={props.value}
      onChange={props.handleInputChange}
      />
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
</nav>
    )
}

export default nav;
import React from "react";
import logoFilm from "../logoFilm.png";
import Search from "./search.jsx";
import "./navbar.css";

//stateless functional component, shortcut for this = sfc

const NavBar = props => {
  console.log("NavBar Rendered");
  return (
    <nav className="navbar sticky-top navbar-dark bg-dark">
      <a className="navbar-brand" href="#">
        <img
          src={logoFilm}
          width="30"
          height="30"
          className="d-inline-block align-top m-1"
          alt=""
        />
        <span className="d-inline-block align-top m-1">MovFlix</span>
      </a>
      <form className="form-inline">
        <Search
          handleSubmit={props.handleSubmit}
          handleChange={props.handleChange}
        />
      </form>
    </nav>
  );
};

export default NavBar;

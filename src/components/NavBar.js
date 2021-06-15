import { checkPropTypes } from "prop-types";
import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const NavBar = (props) => {
  return (
    <>
      <div class="topnav">
        <Link to="/">
          <a href="#home">Home</a>
        </Link>
        <Link to="/InputForm">
          <a href="#inputform">NewForm</a>
        </Link>
      </div>
      <div>{props.children}</div>
    </>
  );
};
export default NavBar;

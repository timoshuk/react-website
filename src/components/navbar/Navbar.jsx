import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="navbar-container container">
          <Link to="/" className="navbar-logo">
            LAVISH
          </Link>
          <div className="manu-icon"></div>
        </div>
      </div>
    </>
  );
}

export default Navbar;

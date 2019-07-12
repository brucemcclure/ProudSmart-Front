import React from "react";
import { Link } from "react-router-dom";
//import { Menu } from "antd";

const Navbar = props => {
  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to="/" className="brand-logo">
          Learning Platform
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "antd";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";
import renderEmpty from "antd/lib/config-provider/renderEmpty";

const Navbar = props => {
  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to="/" className="brand-logo">
          Learning Platform
        </Link>
        <SignedOutLinks />
        <SignedInLinks />
      </div>
    </nav>
  );
};

export default Navbar;

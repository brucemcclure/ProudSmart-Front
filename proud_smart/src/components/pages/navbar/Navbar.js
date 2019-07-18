import React from "react";
import { Link } from "react-router-dom";
import { Input } from "antd";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";

const Navbar = props => {
  const { Search } = Input;
  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to="/" className="brand-logo">
          Learning Platform
        </Link>
        <div className="center-align">
          <Search
            placeholder="search"
            onSearch={value => console.log(value)}
            style={{ width: 200 }}
          />
        </div>
        <SignedOutLinks />
        <SignedInLinks />
      </div>
    </nav>
  );
};

export default Navbar;

import React from "react";
import { Link } from "react-router-dom";
<<<<<<< HEAD:proud_smart/src/components/pages/navbar/Navbar.js
//import { Menu } from "antd";
=======
import { Menu } from "antd";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";
>>>>>>> dev:proud_smart/src/pages/navbar/Navbar.js

const Navbar = props => {
  const state = {
    user: "signedOut"
  };

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

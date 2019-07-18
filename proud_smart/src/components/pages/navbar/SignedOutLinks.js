import React from "react";
import { NavLink } from "react-router-dom";
import { Menu } from "antd";

const SignedOutLinks = props => {
  return (
    <ul className="right">
      <li>
        <NavLink to="/auth/register">Sign Up</NavLink>
      </li>
      <li>
        <NavLink to="/auth/login">Log In</NavLink>
      </li>
    </ul>
  );
};

export default SignedOutLinks;

import React from "react";
import { NavLink } from "react-router-dom";

const SignedOutLinks = props => {
  return (
    <>
      <li>
        <NavLink to="/auth/register">Sign Up</NavLink>
      </li>
      <li>
        <NavLink to="/auth/login">Log In</NavLink>
      </li>
    </>
  );
};

export default SignedOutLinks;

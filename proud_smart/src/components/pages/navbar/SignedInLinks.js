import React from "react";
import { NavLink } from "react-router-dom";
import { Menu } from "antd";

const SignedInLinks = props => {
  return (
    <ul className="right">
      <li>
        <NavLink to="/">Shopping Cart</NavLink>
      </li>
      <li>
        <NavLink to="/users/dashboard">My Courses</NavLink>
      </li>
      <li>
        <NavLink to="/users/edit">Edit Profile</NavLink>
      </li>
      <li>
        <NavLink to="/" className="btn btn-floating pink lighten-1">
          AF
        </NavLink>
      </li>
    </ul>
  );
};

export default SignedInLinks;

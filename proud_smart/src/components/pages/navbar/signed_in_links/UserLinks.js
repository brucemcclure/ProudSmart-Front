import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class UserLinks extends Component {
  render() {
    return (
      <>
        <li>
          <NavLink to="/users/dashboard">Purchased Courses</NavLink>
        </li>
      </>
    );
  }
}

export default UserLinks;

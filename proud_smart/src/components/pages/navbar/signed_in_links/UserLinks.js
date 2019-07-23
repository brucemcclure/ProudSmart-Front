import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class UserLinks extends Component {
  render() {
    
    return (
      <ul className="right">
        <li>
          <NavLink to="/users/dashboard">
            Purchased Courses
          </NavLink>
        </li>
      </ul>
    );
  }
}


export default UserLinks;
import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class AdminLinks extends Component {
  render() {
    return (
      <>
        <li>
          <NavLink to="/admin/educators">Educators</NavLink>
        </li>
        <li>
          <NavLink to="/admin/course-applications">Course Applications</NavLink>
        </li>
        <li>
          <NavLink to="/admin/users">Users</NavLink>
        </li>
        <li>
          <NavLink to="/courses/new">Create a Course</NavLink>
        </li>
      </>
    );
  }
}

export default AdminLinks;

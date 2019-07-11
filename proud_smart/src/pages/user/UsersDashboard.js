import React, { Component } from "react";
import { Link } from "react-router-dom";

class UsersDashboard extends Component {
  render() {
    return (
      <>
        <h1>This is the UsersDashboard</h1>;
        <Link to="/courses/show">
          <button>Show Course</button>
        </Link>
      </>
    );
  }
}

export default UsersDashboard;

import React, { Component } from "react";
import { Link } from "react-router-dom";

class LandingPage extends Component {
  render() {
    return (
      <>
        <h1>ProudSmart Learning Platform</h1>
        <Link to="/auth/login">
          <button>Log in</button>
        </Link>

        <Link to="/auth/register">
          <button>Register</button>
        </Link>

        <div />
      </>
    );
  }
}

export default LandingPage;

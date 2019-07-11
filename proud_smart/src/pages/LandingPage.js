import React, { Component } from "react";
import { Link } from "react-router-dom";

class LandingPage extends Component {
  render() {
    return (
      <>
        <h1>This is the LandingPage</h1>
        <Link to="/auth/login">
          <button>Log in</button>
        </Link>

        <Link to="/auth/register">
          <button>Register</button>
        </Link>
      </>
    );
  }
}

export default LandingPage;

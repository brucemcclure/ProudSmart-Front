import React, { Component } from "react";
import { Link } from "react-router-dom";

class LandingPage extends Component {
  render() {
    return (
      <>
        <div className="container hero" style={{ vh: "100%" }}>
          <h1>ProudSmart Learning Platform</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est
            distinctio animi labore. Fugit facere, distinctio nobis cum eveniet
            eum possimus totam pariatur! Dolore quis accusamus, obcaecati sunt
            eligendi ut beatae!
          </p>
          <Link to="/auth/register" className="btn">
            Register
          </Link>
        </div>
        <div className="" />
      </>
    );
  }
}

export default LandingPage;

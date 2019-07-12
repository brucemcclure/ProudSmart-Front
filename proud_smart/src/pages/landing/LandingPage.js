import React, { Component } from "react";
import { Link } from "react-router-dom";

class LandingPage extends Component {
  render() {
    return (
      <>
        <div className="container" style={{ minHeight: "calc(100vh - 64px)" }}>
          <div className="hero">
            <h1>ProudSmart Learning Platform</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est
              distinctio animi labore. Fugit facere, distinctio nobis cum
              eveniet eum possimus totam pariatur! Dolore quis accusamus,
              obcaecati sunt eligendi ut beatae!
            </p>
            <Link to="/auth/register" className="btn-large">
              Register
            </Link>
          </div>
        </div>
        <div className="container" style={{ minHeight: "100vh" }}>
          <div className="courses">
            <h1>Hello</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Perspiciatis voluptates doloribus sint, quod sapiente ad et quo!
              Aspernatur veniam blanditiis laudantium temporibus cupiditate
              exercitationem, maiores voluptatem? Ab eum optio officiis!
            </p>
          </div>
        </div>
      </>
    );
  }
}

export default LandingPage;

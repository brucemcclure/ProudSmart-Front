import React, { Component } from "react";
import { Link } from "react-router-dom";

import SquareCard from "../../cards/SquareCard";
import BackgroundImage from "../../images/landing.jpeg";

const squareCardContainer = {
  display: "flex",
  flexDirection: "row",
  width: "100%",
  flexWrap: "wrap"
};

const backgroundImageStyling = {
  backgroundImage: `linear-gradient(to right, rgba(189, 214, 255, 0.6), rgba(76, 154, 179, 0.2)), url(${BackgroundImage})`,
  height: "100%",
  backgroundSize: "cover"
};

// background-image:
// linear-gradient(to bottom, rgba(245, 246, 252, 0.52), rgba(117, 19, 93, 0.73)),
// url('images/background.jpg');

class LandingPage extends Component {
  render() {
    return (
      <>

        <div style={backgroundImageStyling}>
          <div
            className="container section valign-wrapper"
            style={{ minHeight: "calc(100vh - 64px)" }}
          >
            <div className="hero row">
              <div className="col s6">
                <h1 style={{ marginBottom: 5 }}>ProudSmart Learning Platform</h1>
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
          </div>
        </div>
        <div className="container section" style={{ minHeight: "100vh" }}>
          <div className="courses">
            <h1>Featured Courses</h1>
            <div style={squareCardContainer}>
              <SquareCard />
            </div>

            <div className="row" style={{ display: "flex" }}>
              <div className="col s3">
                <h3>Heading</h3>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Perspiciatis voluptates doloribus sint, quod sapiente ad et
                  quo! Aspernatur veniam blanditiis laudantium temporibus
                  cupiditate exercitationem, maiores voluptatem? Ab eum optio
                  officiis!
                </p>
              </div>
              <div className="col s6 valign-wrapper">
                <div style={{ margin: "auto" }}>
                  <Link to="/auth/register" className="btn-large">
                    Register
                  </Link>
                </div>
              </div>
              <div className="col s3">
                <h3>Heading</h3>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Perspiciatis voluptates doloribus sint, quod sapiente ad et
                  quo! Aspernatur veniam blanditiis laudantium temporibus
                  cupiditate exercitationem, maiores voluptatem? Ab eum optio
                  officiis!
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default LandingPage;

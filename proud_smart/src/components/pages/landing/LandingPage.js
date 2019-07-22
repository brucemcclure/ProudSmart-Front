import React, { Component } from "react";
import { Link } from "react-router-dom";

import SquareCard from "../../cards/SquareCard";
import BackgroundImage from "../../images/landing.jpeg";

import LocalAPI from "./../../../apis/Local";

const squareCardContainer = {
  display: "flex",
  flexDirection: "row",
  width: "100%",
  flexWrap: "wrap"
};

const linkStyle = {
  display: "block",
  width: "100%"
};

const backgroundImageStyling = {
  backgroundImage: `url(${BackgroundImage})`,
  backgroundSize: "cover",
  backgroundPosition: "50%"
};

const landingText = {
  color: "#F7F7F8"
};

class LandingPage extends Component {
  state = {
    courses: []
  };

  componentDidMount() {
    LocalAPI("/courses").then(response => {
      console.log(response.data);
      this.setState({ courses: response.data });
    });
  }

  render() {
    return (
      <>
        <div style={backgroundImageStyling}>
          <div
            className="container section valign-wrapper"
            style={{ minHeight: "calc(100vh - 64px)" }}
          >
            <div className="hero row">
              <div className="col s6" style={landingText}>
                <h1 style={{ ...landingText, marginBottom: 5 }}>
                  ProudSmart Learning Platform
                </h1>
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
              {this.state.courses.map(course => {
                return (
                  <Link
                    to={{
                      pathname: `/courses/show/${course._id}`,
                      state: {
                        course: course
                      }
                    }}
                    // style={linkStyle}
                  >
                    <SquareCard course={course} />
                  </Link>
                );
              })}
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

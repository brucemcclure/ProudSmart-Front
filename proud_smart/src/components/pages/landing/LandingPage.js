import React, { Component } from "react";
import { Link } from "react-router-dom";

import SquareCard from "../../cards/SquareCard";
import BackgroundImage from "../../images/landing.jpeg";

import LocalAPI from "./../../../apis/Local";
import {connect} from "react-redux"

const squareCardContainer = {
  display: "flex",
  flexDirection: "row",
  width: "100%",
  flexWrap: "wrap",
  justifyContent: "space-between",
  alignContent: "space-between",
  marginBottom: "4%"
  // backgroundColor: "purple"
};

const backgroundImageStyling = {
  backgroundImage: `url(${BackgroundImage})`,
  backgroundSize: "cover",
  backgroundPosition: "50%"
};

const LinkStyle = {
  display: "block",
  width: "24%",
  marginBottom: "10px"
  // backgroundColor: "yellow"
};

const landingText = {
  color: "#F7F7F8"
};

const titleParagraph = {
  width: "60%"
};

class LandingPage extends Component {
  state = {
    courses: []
  };

  componentDidMount() {
    LocalAPI("/courses").then(response => {
      // console.log(response.data);
      this.setState({ courses: response.data });
    });
  }

  render() {
    const {token} = this.props;
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
                <p style={titleParagraph}>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est
                  distinctio animi labore. Fugit facere, distinctio nobis cum
                  eveniet eum possimus totam pariatur! Dolore quis accusamus,
                  obcaecati sunt eligendi ut beatae!
                </p>
                {
                  !(token) 
                  && 
                  <Link to="/auth/register" className="btn-large">
                    Register
                  </Link>
                } 
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
                    style={LinkStyle}
                    key={`landing page link ${course._id}`}
                  >
                    <SquareCard course={course} key={`landing page square card ${course._id}`}/>
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
};

const mapStateToProps = state => {
  return {
    token: state.auth.token
  };
};

export default connect(mapStateToProps)(LandingPage);

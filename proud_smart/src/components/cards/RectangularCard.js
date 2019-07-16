import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from "antd";
import Axios from "axios";
import Image from "./../images/landing.jpeg";

const rectangleBackgroundImage = {
  backgroundImage: `url(${Image})`,
  height: "150px",
  width: "150px",
  backgroundSize: "contain"
};

const linkStye = {
  display: "block",
  height: "100%"
};

const rectangularCardHolder = {
  backgroundColor: "#4C9AB3",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  margin: "1.75%",
  boxShadow: "11px 11px 17px -7px rgba(0,0,0,0.67)"
};

const informationSection = {
  display: "flex",
  flexDirection: "column",
  padding: "20px"
};

const priceOrButtons = {
  width: "15%"
};

class RectangularCard extends Component {
  state = { courses: [] };

  componentDidMount() {
    Axios("http://localhost:3000/courses").then(response => {
      console.log(response.data);
      this.setState({ courses: response.data });
    });
  }

  render() {
    return (
      <>
        {this.state.courses.map(course => {
          return (
            <div key={course.title}>
              <div
                style={rectangularCardHolder}
                className="rectangularCardHolder"
              >
                <Link to="/courses/show" style={linkStye}>
                  <div style={rectangleBackgroundImage}> </div>
                </Link>

                <div style={informationSection}>
                  <h5>{course.title}</h5>
                  <p>{course.description}</p>
                  <p>{course.description}</p>
                  <p>{course.teacher}</p>
                </div>

                <Button size="large" style={priceOrButtons}>
                  contact
                </Button>
              </div>
            </div>
          );
        })}
      </>
    );
  }
}

export default RectangularCard;

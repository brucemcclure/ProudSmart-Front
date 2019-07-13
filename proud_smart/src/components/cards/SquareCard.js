import React, { Component } from "react";
import Image from "./../images/GoLang.jpeg";
import Axios from "axios";

const squareBackgroundImage = {
  backgroundImage: `url(${Image})`,
  height: "150px",
  width: "150px",
  backgroundSize: "contain"
};

const squareCardHolder = {
  backgroundColor: "pink",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  margin: "5%",
  padding: "20px",
  width: "20%",
  height: "20%"
};

const informationSection = {
  display: "flex",
  flexDirection: "column",
  padding: "20px"
};

const priceOrButtons = {
  backgroundColor: "green",
  width: "auto"
};

class SquareCard extends Component {
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
              <div style={squareCardHolder}>
                <div style={squareBackgroundImage}> </div>
                <div style={informationSection}>
                  <h5>{course.title}</h5>
                  <p>{course.description}</p>
                </div>
                <div style={priceOrButtons}>Price: {course.price}$</div>
              </div>
            </div>
          );
        })}
      </>
    );
  }
}

export default SquareCard;

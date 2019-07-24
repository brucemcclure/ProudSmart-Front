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
  margin: "1%",
  padding: "20px",
  width: "20%",
  height: "300px"
};

const informationSection = {
  display: "flex",
  height: "10%",
  flexDirection: "column",
  padding: "10px"
};

const priceOrButtons = {
  backgroundColor: "green",
  width: "auto"
};

class SquareCardLanding extends Component {
  state = { courses: [] };

  render() {
    return (
      <>
        {this.state.courses.slice(0, 4).map(course => {
          return (
            <div key={course.title} style={squareCardHolder}>
              <div style={squareBackgroundImage}> </div>
              <div style={informationSection}>
                <h5>{course.title.slice(0, 12) + "..."}</h5>
                <p>{course.description.slice(0, 60) + "..."}</p>
                <div style={priceOrButtons}>Price: {course.price}$</div>
              </div>
            </div>
          );
        })}
      </>
    );
  }
}

export default SquareCardLanding;

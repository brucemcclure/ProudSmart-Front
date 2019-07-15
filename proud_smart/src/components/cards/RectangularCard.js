import React, { Component } from "react";
import Image from "./../images/GoLang.jpeg";
import Axios from "axios";

const rectangleBackgroundImage = {
  backgroundImage: `url(${Image})`,
  height: "150px",
  width: "150px",
  backgroundSize: "contain"
};

const rectangularCardHolder = {
  backgroundColor: "pink",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  margin: "1%",
  padding: "20px"
};

const informationSection = {
  display: "flex",
  flexDirection: "column",
  padding: "20px"
};

const priceOrButtons = {
  backgroundColor: "green",
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
                <div>
                  <div style={rectangleBackgroundImage}> </div>
                </div>

                <div style={informationSection}>
                  <h5>{course.title}</h5>
                  <p>{course.description}</p>
                  <p>{course.description}</p>
                  <p>{course.teacher}</p>
                </div>

                <div style={priceOrButtons}>Contact Educator</div>
              </div>
            </div>
          );
        })}
      </>
    );
  }
}

export default RectangularCard;

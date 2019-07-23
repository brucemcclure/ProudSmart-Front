import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from "antd";
import Image from "./../images/GoLang.jpeg";

const linkStye = {
  display: "block",
  width: "24%"
};

const squareBackgroundImage = {
  backgroundImage: `url(${Image})`,
  height: "150px",
  width: "100%",
  backgroundSize: "cover"
  //backgroundRepeat: "no-repeat"
};

const squareCardHolder = {
  backgroundColor: "#4C9AB3",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginTop: "10%",
  padding: "0",
  width: "100%",
  height: "100%",
  boxShadow: "11px 11px 17px -7px rgba(0,0,0,0.67)"
};

const informationSection = {
  display: "flex",
  height: "10%",
  flexDirection: "column",
  padding: "10px"
};

class SquareCard extends Component {
  render() {
    return (
      <>
        <div key={this.props.course.title} style={squareCardHolder}>
          <div style={squareBackgroundImage}> </div>
          <div style={informationSection}>
            {console.log(this.props.course.title)}
            <h6>{this.props.course.title.slice(0, 12) + "..."}</h6>
            <p>{this.props.course.description.slice(0, 48) + "..."}</p>

            <p>Price: {this.props.course.price}$</p>

            <Link
              to={{
                pathname: `/courses/edit/${this.props.course._id}`,
                state: {
                  course: this.props.course
                }
              }}
            >
              Edit this course
            </Link>
          </div>
        </div>
      </>
    );
  }
}

export default SquareCard;

import React, { Component } from "react";
import RectangularCard from "./../../cards/RectangularCard";
import {connect} from "react-redux";
import LocalAPI from "./../../../apis/Local";

class CoursesIndex extends Component {
  state = { courses: [] };

  componentDidMount() {
    LocalAPI("/courses").then(response => {
      console.log(response.data);
      this.setState({ courses: response.data });
    });
  }

  render() {
    return (
      <div className="container">
        <h1>This is the CoursesIndex</h1>
        <RectangularCard />;
      </div>
    );
  }
}

const mapPropsToState = (state) => {
  const {userId, userType} = state.user;
  return {
    userId,
    userType
  } 
}

export default connect(mapPropsToState)(CoursesIndex);

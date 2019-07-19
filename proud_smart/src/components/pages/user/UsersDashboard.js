import React, { Component } from "react";
import { Link } from "react-router-dom";
import SquareCard from "../../cards/SquareCard";
import LocalAPI from "./../../../apis/Local";

const squareCardHolder = {
  display: "flex",
  flexDirection: "row",
  width: "100%",
  flexWrap: "wrap"
};

class UsersDashboard extends Component {
  state = {
    user: null
  };

  componentDidMount() {
    LocalAPI("/users/dashboard").then(response => {
      console.log(response.data);
      this.setState({ user: response.data });
    });
  }

  render() {
    return (
      <div className="container section">
        <h1>This is the UsersDashboard</h1>;
        <Link to="/courses/show" className="btn">
          Become a Teacher
        </Link>
        <div style={squareCardHolder} className="container section">
          {console.log(this.state.user)}
          {this.state.user &&
            this.state.user.purchasedCourses &&
            this.state.user.purchasedCourses.map(course => {
              return (
                <Link to={`/courses/dashboard/${course.courseId}`}>
                  <SquareCard course={course} />
                </Link>
              );
            })}
        </div>
      </div>
    );
  }
}

export default UsersDashboard;

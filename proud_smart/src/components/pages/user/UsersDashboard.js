import React, { Component } from "react";
import { Link } from "react-router-dom";
import SquareCard from "../../cards/SquareCard";
import LocalAPI from "./../../../apis/Local";

const squareCardContainer = {
  display: "flex",
  flexDirection: "row",
  width: "100%",
  flexWrap: "wrap",
  justifyContent: "flex-start",
  alignContent: "space-between",
  marginBottom: "4%"
  // backgroundColor: "purple"
};
const LinkStyle = {
  display: "block",
  width: "24%",
  marginRight: "10px"

  // backgroundColor: "yellow"
};

class UsersDashboard extends Component {
  state = {
    user: null
  };

  componentDidMount() {
    LocalAPI("/users/dashboard").then(response => {
      this.setState({ user: response.data });
    });
  }

  render() {
    console.log(this.state);
    return (
      <>
        {this.state.user ? (
          <div className="container section">
            <h1>Purchased Courses</h1>
            {this.state.user.userType === "educator" || (
              <Link to="/auth/educator_application" className="btn">
                Become a Teacher
              </Link>
            )}
            <div style={squareCardContainer} className="container section">
              {console.log(this.state.user)}
              {this.state.user &&
                this.state.user.purchasedCourses &&
                this.state.user.purchasedCourses.map(course => {
                  return (
                    <Link
                      style={LinkStyle}
                      to={`/courses/dashboard/${course.courseId}`}
                    >
                      <SquareCard course={course} />
                    </Link>
                  );
                })}
            </div>
          </div>
        ) : null}
      </>
    );
  }
}

export default UsersDashboard;

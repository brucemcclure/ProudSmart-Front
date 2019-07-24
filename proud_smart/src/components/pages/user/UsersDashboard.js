import React, { Component } from "react";
import { Link } from "react-router-dom";
import SquareCard from "../../cards/SquareCard";
import LocalAPI from "./../../../apis/Local";
import {connect} from "react-redux";

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
const LinkStyle = {
  display: "block",
  width: "24%"

  // backgroundColor: "yellow"
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
    const {userType} = this.props;
    return (
      <div className="container section">
        <h1>Purchased Courses</h1>
        {
          userType === "user" 
          &&
          <Link to="/auth/educator-application" className="btn">
            Become an Educator
          </Link>
        }
        
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
    );
  }
}

const mapPropsToState = state => {
  const { userType } = state.user;
  return {
    userType
  };
};


export default connect(mapPropsToState)(UsersDashboard);

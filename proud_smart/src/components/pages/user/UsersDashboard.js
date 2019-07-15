import React, { Component } from "react";
import { Link } from "react-router-dom";
import SquareCard from "../../cards/SquareCard";

const squareCardHolder = {
  display: "flex",
  flexDirection: "row",
  width: "100%",
  flexWrap: "wrap"
};

class UsersDashboard extends Component {
  render() {
    return (
      <>
        <h1>This is the UsersDashboard</h1>;
        <Link to="/courses/show" className="btn">
          Show Course
        </Link>
        <Link to="/courses/show" className="btn">
          Become a Teacher
        </Link>
        <div style={squareCardHolder} className="container section">
          <SquareCard />
        </div>
      </>
    );
  }
}

export default UsersDashboard;

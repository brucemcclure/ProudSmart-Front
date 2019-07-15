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
        <Link to="/courses/show">
          <button>Show Course</button>
        </Link>
        <div style={squareCardHolder} className="container section">
          <SquareCard />
        </div>
      </>
    );
  }
}

export default UsersDashboard;

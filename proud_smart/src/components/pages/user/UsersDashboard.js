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
      <div className="container section">
        <h1>This is the UsersDashboard</h1>;
        <Link to="/auth/educator_application" className="btn">
          Become a Teacher
        </Link>
        <div style={squareCardHolder}>
          <SquareCard />
        </div>
      </div>
    );
  }
}

export default UsersDashboard;

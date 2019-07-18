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
    const { token } = this.props;
    return (
<<<<<<< HEAD
      <>
        <h1>This is the UsersDashboard</h1>
=======
      <div className="container section">
        <h1>This is the UsersDashboard</h1>;
>>>>>>> a13a6ca590b9d0351e95b1662db3fc8e09fc564a
        <Link to="/courses/show" className="btn">
          Become a Teacher
        </Link>
        <div style={squareCardHolder} className="container section">
          <SquareCard />
        </div>
      </div>
    );
  }
}

export default UsersDashboard;

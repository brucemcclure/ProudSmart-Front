import React, { Component } from "react";
import RectangularCard from "./../../cards/RectangularCard";

class AdminTeachers extends Component {
  render() {
    return (
      <>
        <h1>This is the AdminTeachers</h1>
        <div className="container section">
          <RectangularCard />
        </div>
      </>
    );
  }
}

export default AdminTeachers;

import React, { Component } from "react";
import NewCourseForm from "../../forms/NewCourseForm/NewCourseForm";

class CoursesNew extends Component {
  render() {
    return (
      <>
        <h1>This is the CoursesNew page</h1>
        <div className="container section">
          <NewCourseForm />
        </div>
      </>
    );
  }
}

export default CoursesNew;

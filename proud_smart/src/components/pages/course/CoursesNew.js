import React, { Component } from "react";
import NewCourseForm from "../../forms/NewCourseForm/NewCourseForm";

class CoursesNew extends Component {
  render() {
    return (
      <>
        <h1>Create a Course</h1>
        <div className="container section">
          <NewCourseForm />
        </div>
      </>
    );
  }
}

export default CoursesNew;

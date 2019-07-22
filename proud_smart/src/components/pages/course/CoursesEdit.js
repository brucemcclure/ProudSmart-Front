import React, { Component } from "react";
import NewCourseForm from "../../forms/NewCourseForm/NewCourseForm";

class CoursesEdit extends Component {
  render() {
    console.log(this.props);
    return (
      <>
        <h1>This is the CoursesEdit page</h1>
        <div className="container section">
          <NewCourseForm />
        </div>
      </>
    );
  }
}

export default CoursesEdit;

import React, { Component } from "react";
import EditCourseForm from "../../forms/EditCourseForm/EditCourseForm";

class CoursesEdit extends Component {
  render() {
    console.log(this.props.location.state.course);
    let course = this.props.location.state.course;
    return (
      <>
        <h1>Edit Course</h1>
        <div className="container section">
          <EditCourseForm course={course} />
        </div>
      </>
    );
  }
}

export default CoursesEdit;

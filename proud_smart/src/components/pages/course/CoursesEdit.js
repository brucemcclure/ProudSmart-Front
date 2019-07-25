import React, { Component } from "react";
import EditCourseForm from "../../forms/EditCourseForm/EditCourseForm";

class CoursesEdit extends Component {
  remove_character(str_to_remove, str) {
    let reg = new RegExp(str_to_remove)
    return str.replace(reg, '')
  }
  
  render() {
    let course = this.props.location.state.course;
    course.keyConcepts = "#" + course.keyConcepts.join(" #"); 
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

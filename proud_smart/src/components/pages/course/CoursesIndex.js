import React, { Component } from "react";
import RectangularCard from "./../../cards/RectangularCard";
import {connect} from "react-redux";
import LocalAPI from "./../../../apis/Local";

class CoursesIndex extends Component {
  state = { courses: [] };

  componentDidMount() {
    LocalAPI("/courses").then(response => {
      console.log(response.data);
      this.setState({ courses: response.data });
    });
  }

  onCourseDeleteClick = async (courseId, index) => {
    LocalAPI.delete(`/courses/${courseId}`)
      .then(response => {
        const {courses} = this.state;
        courses.splice(index, 1);
        this.setState({courses}); 
      })
  }

  render() {
    const {courses} = this.state;
    return (
      <div className="container">
        <h1>Available Courses</h1>
        {courses && courses.map(course => {
          return (
            <RectangularCard
              documentType="course"
              documentId={course._id}
              showUrl={`courses/show/${course._id}`}
              editUrl={`courses/edit/${course._id}`}
              title={course.title}
              body={course.description}
              photo={course.courseProfilePictureUrl}
              deleteFunction={this.onCourseDeleteClick}
            />
          );
        })}
        
      </div>
    );
  }
}

const mapPropsToState = (state) => {
  const {userId, userType} = state.user;
  return {
    userId,
    userType
  } 
}

export default connect(mapPropsToState)(CoursesIndex);

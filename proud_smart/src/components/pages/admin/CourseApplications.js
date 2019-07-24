import React, {Component} from "react";
import LocalAPI from "./../../../apis/Local";
import RectangularCard from "./../../cards/RectangularCard";

class CourseApplications extends Component {
  state = {
    courses: null
  }

  componentDidMount = () => {
    LocalAPI("/admin/course-applications")
      .then(response => {
        console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
        console.log(response.data)
        this.setState({courses: response.data});
      })
  };

  onCourseApprovalClick = (document, index) => {
    const {courses} = this.state;
    LocalAPI.put("/admin/approve-application", {type: "course", document})
      .then(response => {
        courses.splice(index,1);
        this.setState({courses});
        console.log(this.state)
      })
      .catch(err => console.log(err))
  };

  onCourseDenialClick = (document, index) => {
    const {courses} = this.state;
    LocalAPI.put("/admin/deny-application", {type: "course", document})
      .then(response => {
        console.log(response.data);
        courses.splice(index,1);
        this.setState({courses});
      });
  }

  onCourseDeleteClick = async (courseId, index) => {
    LocalAPI.delete(`/courses/${courseId}`)
      .then(response => {
        const {courses} = this.state;
        courses.splice(index, 1);
        this.setState({courses}); 
      });
  }

  render() {
    const {courses} = this.state;
    return (
      <div className="container">
        <h1>Course Applications</h1>
        {courses && courses.map(course => {
          return (
            <RectangularCard
              documentType="course"
              documentId={course._id}
              document={course}
              showUrl={`/courses/show/${course._id}`}
              editUrl={`/courses/edit/${course._id}`}
              title={course.title}
              body={course.description}
              photo={course.courseProfilePictureUrl}
              deleteFunction={this.onCourseDeleteClick}
              approvalFunction={this.onCourseApprovalClick}
              denialFunction={this.onCourseDenialClick}
              documentStatus={course.approvalStatus}
            />
          );
        })}
      </div>
    );
  }
} 

export default CourseApplications;
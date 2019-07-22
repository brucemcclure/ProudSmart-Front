import React, { Component } from "react";
import EditCourseFormFirstPage from "./EditCourseFormFirstPage";
import EditCourseFormSecondPage from "./EditCourseFormSecondPage";
import EditCourseFormThirdPage from "./EditCourseFormThirdPage";
import EditCourseFormFourthPage from "./EditCourseFormFourthPage";
import LocalAPI from "../../../apis/Local";

class EditCourseForm extends Component {
  constructor(props) {
    super(props);
    this.nextPage = this.nextPage.bind(this);
    this.previousPage = this.previousPage.bind(this);
    this.state = {
      page: 1
    };
  }
  nextPage() {
    this.setState({ page: this.state.page + 1 });
  }

  previousPage() {
    this.setState({ page: this.state.page - 1 });
  }

  onSubmit = values => {
    // Manipulating submitted form data so that is the format expected by the backend
    // Seperating key key concepts and placing them into an array
    values.keyConcepts = values.keyConcepts.split("#");
    values.keyConcepts = values.keyConcepts.filter(el => el !== "");
    values.keyConcepts = values.keyConcepts.map(el => el.trim());

    // Turning prerequisites into an array (at the moment they are in an object literal)
    values.prerequisites = Object.keys(values.prerequisites);

    // HAVE HARD CODED IN A COURSE PROFILE PICTURE URL NEED TO ADD THIS FEATURE WITH LOCAL STORAGE!!!!!!!!!!!!!!!!!!
    values.courseProfilePictureUrl = "www.PleaseAddThisFeatureJoshOrBruce";
    console.log(values);

    LocalAPI.put(`/courses/${this.props.course._id}`, {
      course: this.props.course,
      values
    })
      .then(data => console.log(data))
      .catch(err => console.log(err));
  };

  render() {
    const { page } = this.state;
    console.log(this.props.course, "This");
    return (
      <div>
        {page === 1 && (
          <EditCourseFormFirstPage
            onSubmit={this.nextPage}
            initialValues={this.props.course}
          />
        )}
        {page === 2 && (
          <EditCourseFormSecondPage
            onSubmit={this.nextPage}
            previousPage={this.previousPage}
            initialValues={this.props.course}
          />
        )}
        {page === 3 && (
          <EditCourseFormThirdPage
            onSubmit={this.nextPage}
            previousPage={this.previousPage}
            initialValues={this.props.course}
          />
        )}
        {page === 4 && (
          <EditCourseFormFourthPage
            onSubmit={this.onSubmit}
            previousPage={this.previousPage}
            initialValues={this.props.course}
          />
        )}
      </div>
    );
  }
}

export default EditCourseForm;

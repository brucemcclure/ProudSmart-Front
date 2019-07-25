import React, { Component } from "react";
import NewCourseFormFirstPage from "./NewCourseFormFirstPage";
import NewCourseFormSecondPage from "./NewCourseFormSecondPage";
import NewCourseFormThirdPage from "./NewCourseFormThirdPage";
import NewCourseFormFourthPage from "./NewCourseFormFourthPage";
import LocalAPI from "./../../../apis/Local";
import { withRouter } from "react-router-dom";
// import { url } from "inspector";

class NewCourseForm extends Component {
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
    // console.log(values);
    // Manipulating submitted form data so that is the format expected by the backend
    // Seperating key key concepts and placing them into an array
    values.keyConcepts = values.keyConcepts.split("#");
    values.keyConcepts = values.keyConcepts.filter(el => el !== "");
    values.keyConcepts = values.keyConcepts.map(el => el.trim());

    // Turning prerequisites into an array (at the moment they are in an object literal)
    values.prerequisites = values.prerequisites && Object.keys(values.prerequisites);
    
    values.courseProfilePictureUrl =
      values.courseProfilePictureUrl ||
      "https://proudsmarts3bucket.s3.ap-southeast-2.amazonaws.com/profile_pictures/academia-1563926224405.jpg";
    LocalAPI.post("courses", values)
      .then(data => this.props.history.push("/"))
      .catch(err => console.log(err));
    // console.log(values);
  };

  render() {
    const { page } = this.state;
    return (
      <div>
        {page === 1 && <NewCourseFormFirstPage onSubmit={this.nextPage} />}
        {page === 2 && (
          <NewCourseFormSecondPage
            onSubmit={this.nextPage}
            previousPage={this.previousPage}
          />
        )}
        {page === 3 && (
          <NewCourseFormThirdPage
            onSubmit={this.nextPage}
            previousPage={this.previousPage}
          />
        )}
        {page === 4 && (
          <NewCourseFormFourthPage
            onSubmit={this.onSubmit}
            previousPage={this.previousPage}
          />
        )}
      </div>
    );
  }
}

// NewCourseForm = reduxForm ({
//   form: 'NewCourseForm',
//   initialValues: {
//     location: {
//      titl: "0.0",
//      longitude: "0.0"
//    }
//   }
// })(WizardForm)

export default withRouter(NewCourseForm);

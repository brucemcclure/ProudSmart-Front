import React, { Component } from "react";
import NewCourseFormFirstPage from "./NewCourseFormFirstPage";
import NewCourseFormSecondPage from "./NewCourseFormSecondPage";
import NewCourseFormThirdPage from "./NewCourseFormThirdPage";
import NewCourseFormFourthPage from "./NewCourseFormFourthPage";
import LocalAPI from "./../../../apis/Local";

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
    console.log(values);
    // Manipulating submitted form data so that is the format expected by the backend
    // Seperating key key concepts and placing them into an array
    // values.keyConcepts = values.keyConcepts.split("#");
    // values.keyConcepts = values.keyConcepts.filter(el => el !== "");
    // values.keyConcepts = values.keyConcepts.map(el => el.trim());

<<<<<<< HEAD
    // // Turning prerequisites into an array (at the moment they are in an object literal)
    // values.prerequisites = Object.keys(values.prerequisites);

    // // HAVE HARD CODED IN A COURSE PROFILE PICTURE URL NEED TO ADD THIS FEATURE WITH LOCAL STORAGE!!!!!!!!!!!!!!!!!!
    // values.courseProfilePictureUrl = "www.PleaseAddThisFeatureJoshOrBruce";
    // console.log(values);
=======
    // Turning prerequisites into an array (at the moment they are in an object literal)
    values.prerequisites = Object.keys(values.prerequisites);
    console.log(values);
>>>>>>> d2ca2dce4369a10d34d86137efec46f222a8caf7

    // LocalAPI.post("courses", values)
    //   .then(data => console.log(data))
    //   .catch(err => console.log(err));
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

export default NewCourseForm;

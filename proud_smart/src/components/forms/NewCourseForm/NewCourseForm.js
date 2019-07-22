import React, { Component } from "react";
import PropTypes from "prop-types";
import NewCourseFormFirstPage from "./NewCourseFormFirstPage";
import NewCourseFormSecondPage from "./NewCourseFormSecondPage";
import NewCourseFormThirdPage from "./NewCourseFormThirdPage";
import NewCourseFormFourthPage from "./NewCourseFormFourthPage";

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
    console.log("Mr pickles the corgi");
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

export default NewCourseForm;

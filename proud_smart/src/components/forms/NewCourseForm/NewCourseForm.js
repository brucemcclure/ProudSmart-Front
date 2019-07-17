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

  render() {
    const { onSubmit } = this.props;
    const { page } = this.state;
    return (
      <div>
        {page === 1 && <NewCourseFormFirstPage onSubmit={this.nextPage} />}
        {page === 2 && (
          <NewCourseFormSecondPage
            previousPage={this.previousPage}
            onSubmit={this.nextPage}
          />
        )}
        {page === 3 && (
          <NewCourseFormThirdPage
            previousPage={this.previousPage}
            onSubmit={this.nextPage}
          />
        )}
        {page === 4 && (
          <NewCourseFormFourthPage
            previousPage={this.previousPage}
            onSubmit={onSubmit}
          />
        )}
      </div>
    );
  }
}

NewCourseForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default NewCourseForm;

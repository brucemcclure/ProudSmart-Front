import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import validate from "../formHelpers/validate";
import renderField from "../formHelpers/renderField";

const required = value => (value ? undefined : "Required");

class NewCourseFormFirstPage extends Component {
  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit}>
        <Field
          name="title"
          type="text"
          component={renderField}
          label="courseTitle"
          validate={required}
        />
        <Field
          name="description"
          type="text"
          placeholder="Course Description"
          component={renderField}
          label="Description"
          validate={required}
        />
        <Field
          name="educator"
          type="text"
          component={renderField}
          label="Educator of this course"
          validate={required}
        />

        <div>
          <button type="submit" className="next">
            Next
          </button>
        </div>
      </form>
    );
  }
}

export default reduxForm({
  form: "NewCourseForm",
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate
})(NewCourseFormFirstPage);

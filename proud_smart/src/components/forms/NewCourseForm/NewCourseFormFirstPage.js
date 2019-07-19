import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import validate from "../formHelpers/validate";
import renderField from "../formHelpers/renderField";
import renderCheckbox from "../formHelpers/renderCheckbox";

class NewCourseFormFirstPage extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <Field
          name="Course Title"
          type="text"
          component={renderField}
          label="courseTitle"
        />
        <Field
          name="Description"
          type="text"
          placeholder="Course Description"
          component="textarea"
          label="Description"
        />
        <Field
          name="Educator"
          type="text"
          component={renderField}
          label="Educator of this course"
        />
        <div>
          <label title="Area of Study">Area of study</label>
          <div>
            <Field name="topics.IoT" id="IoT" component={renderCheckbox} />
            <Field name="topics.ML" id="ML" component={renderCheckbox} />
            <Field name="topics.AI" id="AI" component={renderCheckbox} />
            <Field name="topics.Cloud" id="Cloud" component={renderCheckbox} />
            <Field
              name="topics.Dev Ops"
              id="Dev Ops"
              component={renderCheckbox}
            />
            <Field
              name="Infrastructure"
              id="Infrastructure"
              component={renderCheckbox}
            />
            <Field name="Corgi" id="employed" component={renderCheckbox} />
          </div>
        </div>
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

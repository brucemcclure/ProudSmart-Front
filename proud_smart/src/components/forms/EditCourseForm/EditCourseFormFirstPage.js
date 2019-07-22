import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import validate from "../formHelpers/validate";
import renderField from "../formHelpers/renderField";
import renderCheckbox from "../formHelpers/renderCheckbox";

class EditCourseFormFirstPage extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <Field
          name="title"
          type="text"
          component={renderField}
          label="courseTitle"
          defaultValue={"course"}
        />
        <Field
          name="description"
          type="text"
          placeholder="Course Description"
          component="textarea"
          label="Description"
        />
        <Field
          name="educator"
          type="text"
          component={renderField}
          label="Educator of this course"
        />
        <div>
          <label title="Area of Study">Area of study</label>
          <div>
            <Field name="topics.ioT" id="IoT" component={renderCheckbox} />
            <Field name="topics.mL" id="ML" component={renderCheckbox} />
            <Field name="topics.aI" id="AI" component={renderCheckbox} />
            <Field name="topics.cloud" id="Cloud" component={renderCheckbox} />
            <Field
              name="topics.devOps"
              id="Dev Ops"
              component={renderCheckbox}
            />
            <Field
              name="topics.infrastructure"
              id="Infrastructure"
              component={renderCheckbox}
            />
            <Field
              name="topics.corgi"
              id="employed"
              component={renderCheckbox}
            />
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
  form: "EditCourseForm",
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate
})(EditCourseFormFirstPage);

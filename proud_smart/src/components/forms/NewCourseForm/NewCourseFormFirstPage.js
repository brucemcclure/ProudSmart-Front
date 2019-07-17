import React from "react";
import { Field, reduxForm } from "redux-form";
import validate from "../formHelpers/validate";
import renderField from "../formHelpers/renderField";
import renderCheckbox from "../formHelpers/renderCheckbox";

const NewCourseFormFirstPage = props => {
  const { handleSubmit } = props;
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
        <label htmlFor="Area of study">Area of study</label>
        <div>
          <Field name="IoT" id="IoT" component={renderCheckbox} />
          <Field name="ML" id="ML" component={renderCheckbox} />
          <Field name="AI" id="AI" component={renderCheckbox} />
          <Field name="Cloud" id="Cloud" component={renderCheckbox} />
          <Field name="Dev Ops" id="Dev Ops" component={renderCheckbox} />
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
};

export default reduxForm({
  form: "NewCourseForm",
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate
})(NewCourseFormFirstPage);

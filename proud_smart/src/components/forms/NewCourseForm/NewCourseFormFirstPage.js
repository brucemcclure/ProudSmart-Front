import React from "react";
import { Field, reduxForm } from "redux-form";
import validate from "../formServices/validate";
import renderField from "../formServices/renderField";

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
        name="lastName"
        type="text"
        component={renderField}
        label="Last Name"
      />
      <div>
        <button type="submit" className="next">
          Next
        </button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: "NewCourseForm", // <------ same form name
  destroyOnUnmount: false, // <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate
})(NewCourseFormFirstPage);

import React from "react";
import { Field, reduxForm } from "redux-form";
import validate from "../formHelpers/validate";
import Chapter from "../formHelpers/chapter";
import renderField from "../formHelpers/renderField";

const NewCourseFormFourthPage = props => {
  const { handleSubmit, pristine, previousPage, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>
      <Chapter />
      <div>
        <button type="button" className="previous" onClick={previousPage}>
          Previous
        </button>
        <button type="submit" disabled={pristine || submitting}>
          Submit
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
})(NewCourseFormFourthPage);

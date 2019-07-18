import React, { Component } from "react";
import renderCheckbox from "../formHelpers/renderCheckbox";
import { Field, reduxForm } from "redux-form";
import validate from "../formHelpers/validate";
import renderField from "../formHelpers/renderField";

const renderError = ({ meta: { touched, error } }) =>
  touched && error ? <span>{error}</span> : false;

class NewCourseFormSecondPage extends Component {
  render() {
    const { handleSubmit, previousPage } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="documentupload">Documents to upload</label>
          <div>
            <Field
              name="documents"
              component="input"
              type="file"
              value={null}
            />
          </div>
          <label htmlFor="picturetoupload">Course profile picture</label>
          <div>
            <Field name="picture" component="input" type="file" value={null} />
          </div>
        </div>

        <label htmlFor="Area of study">Is this course certified?</label>
        <Field name="Certified" id="Certified" component={renderCheckbox} />
        <div>
          <div>
            <button type="button" className="previous" onClick={previousPage}>
              Previous
            </button>
            <button type="submit" className="next">
              Next
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default reduxForm({
  form: "NewCourseForm", //Form name is same
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate
})(NewCourseFormSecondPage);

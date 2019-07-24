import React, { Component } from "react";
import renderCheckbox from "../formHelpers/renderCheckbox";
import { Field, reduxForm } from "redux-form";
import validate from "../formHelpers/validate";
import renderField from "../formHelpers/renderField";
import renderFile from "../formHelpers/renderFile";
import LocalAPI from "./../../../apis/Local"; //Joshua
import $ from "jquery"; //Joshua


const renderError = ({ meta: { touched, error } }) =>
  touched && error ? <span>{error}</span> : false;

class EditCourseFormSecondPage extends Component {
  singleFileChangedHandler = event => {
    //console.log(event.target.files); //this will show you whats inside the event target.
    this.setState({
      selectedFile: event.target.files[0]
    });
  };
  render() {
    const { handleSubmit, previousPage } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="documentupload">Documents to upload</label>
          <div>
            <Field name="documents" component={renderFile} />
          </div>
          <label htmlFor="picturetoupload">Course profile picture</label>
          <div>
            <Field name="picture" component={renderFile} />
          </div>
        </div>

        <label htmlFor="Area of study">Is this course certified?</label>
        <Field name="certified" id="Certified" component={renderCheckbox} />
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
  form: "EditCourseForm", //Form name is same
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate
})(EditCourseFormSecondPage);

import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import validate from "../formHelpers/validate";
import renderField from "../formHelpers/renderField";
import renderCheckbox from "../formHelpers/renderCheckbox";

class EditCourseFormThirdPage extends Component {
  render() {
    const { handleSubmit, pristine, previousPage, submitting } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <p>Please write out the key concepts of the course separated by a #</p>
        <p>eg. #Programming #Cloud #Machine Learning </p>
        <Field
          name="keyConcepts"
          type="text"
          component={renderField}
          label="Key Concept"
        />
        <div>
          <label title="prerequisites">prerequisites</label>
          <div>
            <Field
              name="prerequisites.ioT"
              id="IoT"
              component={renderCheckbox}
            />
            <Field name="prerequisites.mL" id="ML" component={renderCheckbox} />
            <Field name="prerequisites.aI" id="AI" component={renderCheckbox} />
            <Field
              name="prerequisites.cloud"
              id="Cloud"
              component={renderCheckbox}
            />
            <Field
              name="prerequisites.devOps"
              id="Dev Ops"
              component={renderCheckbox}
            />
            <Field
              name="prerequisites.infrastructure"
              id="Infrastructure"
              component={renderCheckbox}
            />
            <Field
              name="prerequisites.corgi"
              id="employed"
              component={renderCheckbox}
            />
          </div>
        </div>

        <Field name="price" type="text" component={renderField} label="Price" />

        <div>
          <button type="button" className="previous" onClick={previousPage}>
            Previous
          </button>
          <button type="submit" className="next">
            Next
          </button>
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
})(EditCourseFormThirdPage);

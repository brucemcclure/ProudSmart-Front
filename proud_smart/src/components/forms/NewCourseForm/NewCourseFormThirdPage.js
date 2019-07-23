import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import validate from "../formHelpers/validate";
import renderField from "../formHelpers/renderField";
import renderCheckbox from "../formHelpers/renderCheckbox";
// import KeyConceptsValidation from "../formHelpers/keyConceptsValidation";

const required = value => (value ? undefined : "Required");

const number = value =>
  value && isNaN(Number(value)) ? "Must be a number" : undefined;

const KeyConceptsValidation = value => {
  let arr = value.split(" ");
  console.log(arr);
  let arrayLength = arr.length;
  for (let i = 0; i < arrayLength; i++) {
    if (arr[i][0] === "#") {
    } else {
      return `the word in position ${i +
        1} is invalid please make sure there is a '#' at the beginning of it`;
    }
  }
};

class NewCourseFormThirdPage extends Component {
  render() {
    const { handleSubmit, previousPage } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <p>Please write out the key concepts of the course separated by a #</p>
        <p>eg. #Programming #Cloud #Machine Learning </p>
        <Field
          name="keyConcepts"
          type="text"
          component={renderField}
          label="Key Concept"
          validate={[required, KeyConceptsValidation]}
        />
        <div>
          <label title="prerequisites">prerequisites</label>
          <div>
            <Field
              name="prerequisites.ioT"
              id="IoT"
              component={renderCheckbox}
              label="ioT"
            />
            <Field
              name="prerequisites.mL"
              id="ML"
              component={renderCheckbox}
              label="ML"
            />
            <Field
              name="prerequisites.aI"
              id="AI"
              component={renderCheckbox}
              label="aI"
            />
            <Field
              name="prerequisites.cloud"
              id="Cloud"
              component={renderCheckbox}
              label="Cloud"
            />
            <Field
              name="prerequisites.devOps"
              id="Dev Ops"
              component={renderCheckbox}
              label="Dev Ops"
            />
            <Field
              name="prerequisites.infrastructure"
              id="Infrastructure"
              component={renderCheckbox}
              label="Infrastructure"
            />
            <Field
              name="prerequisites.corgi"
              id="employed"
              component={renderCheckbox}
              label="employed"
            />
          </div>
        </div>

        <Field
          name="price"
          type="text"
          component={renderField}
          validate={[required, number]}
          label="Price"
        />

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
  form: "NewCourseForm", //Form name is same
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate
})(NewCourseFormThirdPage);

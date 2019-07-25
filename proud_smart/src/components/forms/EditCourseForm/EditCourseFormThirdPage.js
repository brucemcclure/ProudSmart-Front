import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import validate from "../formHelpers/validate";
import renderField from "../formHelpers/renderField";
import renderCheckbox from "../formHelpers/renderCheckbox";

const required = value => (value ? undefined : "Required");

const number = value =>
  value && isNaN(Number(value)) ? "Must be a number" : undefined;

const correctAutofillForValidation = value => {
  // console.log(value);
  if (value[0][0] !== "#") {
    let arrayLength = value.length;

    for (let i = 0; i < arrayLength; i++) {
      value[i] = "#" + value[i] + " ";
    }
    // console.log(value.join(""));
    return value.join("");
  }
};

const KeyConceptsValidation = value => {
  // console.log(value);
  let arr = value.split(",");
  // console.log(arr);
  let arrayLength = arr.length;
  for (let i = 0; i < arrayLength; i++) {
    if (arr[i][0] === "#") {
    } else {
      return `the word in position ${i +
        1} is invalid please make sure there is a '#' at the beginning of it`;
    }
  }
};

class EditCourseFormThirdPage extends Component {
  render() {
    const { handleSubmit, previousPage } = this.props;
    return (
      <form onSubmit={handleSubmit}>

        <p>
          Please write out the key concepts of the course separated by a #
          without commas
        </p>

        <p>for multiword concepts please do not uses spaces </p>
        <p>eg. #Programming #Cloud #MachineLearning </p>
        <Field
          name="keyConcepts"
          type="text"
          component={renderField}
          label="Key Concept"

          validate={[
            required,
            correctAutofillForValidation,
            KeyConceptsValidation
          ]}

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

        <Field
          name="price"
          type="text"
          component={renderField}
          label="Price"
          validate={[required, number]}
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
  form: "EditCourseForm", //Form name is same
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate
})(EditCourseFormThirdPage);

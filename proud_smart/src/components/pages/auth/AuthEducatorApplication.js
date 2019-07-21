import React, {Component} from "react";
import { Field, FieldArray, reduxForm } from "redux-form";
import validate from "./../../forms/formHelpers/validateChaptersandTopics";
import renderCheckbox from "../../forms/formHelpers/renderCheckbox";
import LocalAPI from "./../../../apis/Local"

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} type={type} placeholder={label} />
      {touched && error && <span>{error}</span>}
    </div>
  </div>
);

const renderQualifications = ({ fields, meta: { error, submitFailed } }) => (
  <ul>
    <li>
      <button type="button" onClick={() => fields.push({})}>
        Add Qualification
      </button>
      {submitFailed && error && <span>{error}</span>}
    </li>
    {fields.map((qualification, index) => (
      <li key={index}>
        <button
          type="button"
          title="Remove Qualification"
          onClick={() => fields.remove(index)}
        />
        <h4>Qualifiction #{index + 1}</h4>
        <Field
          name={`${qualification}.type`}
          type="text"
          component={renderField}
          label="Qualification Type"
        />
        <Field
          name={`${qualification}.date`}
          type="date"
          component={renderField}
          label="Graduation Date"
        />
        <Field
          name={`${qualification}.institution`}
          type="text"
          component={renderField}
          label="Qualification Institutionte"
        />
      </li>
    ))}
  </ul>
);

class NewEducatorForm extends Component {
  onFormSubmit = async (formValues) => {
    // manipulating teaching tags so they are in an array not object literal
    formValues.teachingTags = Object.keys(formValues.teachingTags);
    console.log(formValues);
    LocalAPI.put("auth/educator-application", formValues)
      .then(data => console.log(data))
  }
  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props;
    return (
      <div className="container section">
        <form onSubmit={handleSubmit(this.onFormSubmit)}>
          <h6>About Me</h6>
          <Field
            name="About me"
            type="text"
            placeholder="Extra information you would like students to know"
            component="textarea"
            label="About me"
          />
          <FieldArray name="qualifications" component={renderQualifications} />
          <div>
            <button type="submit" disabled={submitting}>
              Submit
            </button>
            <button
              type="button"
              disabled={pristine || submitting}
              onClick={reset}
            >
              Clear Values
            </button>
          </div>
          <div>
            <label htmlFor="Area of study">Areas of competence</label>
            <div>
              <Field name="teachingTags.IoT" id="IoT" component={renderCheckbox} />
              <Field name="teachingTags.ML" id="ML" component={renderCheckbox} />
              <Field name="teachingTags.AI" id="AI" component={renderCheckbox} />
              <Field name="teachingTags.Cloud" id="Cloud" component={renderCheckbox} />
              <Field name="teachingTags.DevOps" id="DevOps" component={renderCheckbox} />
              <Field
                name="teachingTags.infrastructure"
                id="Infrastructure"
                component={renderCheckbox}
              />
              <Field name="Corgi" id="employed" component={renderCheckbox} />
            </div>
          </div>
        </form>
      </div>
    );
  }
};

export default reduxForm({
  form: "NewEducatorForm", // a unique identifier for this form
  validate
})(NewEducatorForm);

import React from "react";
import { Field, FieldArray, reduxForm } from "redux-form";
import validate from "./../../forms/formHelpers/validateChaptersandTopics";
import renderCheckbox from "../../forms/formHelpers/renderCheckbox";

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
          type="text"
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

const NewEducatorForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <div className="container section">
      <form onSubmit={handleSubmit}>
        <h6>About Me</h6>
        <Field
          name="About me"
          type="text"
          placeholder="Extra information you would like students to know"
          component="textarea"
          label="About me"
        />
        <FieldArray name="qulaifications" component={renderQualifications} />
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
      </form>
    </div>
  );
};

export default reduxForm({
  form: "NewEducatorForm", // a unique identifier for this form
  validate
})(NewEducatorForm);

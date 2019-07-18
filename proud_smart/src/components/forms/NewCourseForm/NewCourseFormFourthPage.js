import React, { Component } from "react";
import { Field, reduxForm, FieldArray } from "redux-form";
import validate from "../formHelpers/validate";
import renderField from "./../formHelpers/renderField";

class NewCourseFormFourthPage extends Component {
  render() {
    const renderChapters = ({ fields, meta: { error, submitFailed } }) => (
      <ul>
        <li>
          <button type="button" onClick={() => fields.push({})}>
            Add Chapter
          </button>
          {submitFailed && error && <span>{error}</span>}
        </li>
        {fields.map((chapter, index) => (
          <li key={index}>
            <button
              type="button"
              title="Remove Chapter"
              onClick={() => fields.remove(index)}
            />
            <h4>Chapter #{index + 1}</h4>
            <Field
              name={`${chapter}.title`}
              type="text"
              component={renderField}
              label="Chapter Title"
            />
            <Field
              name={`${chapter}.description`}
              type="textarea"
              component={renderField}
              label="Chapter Description"
            />
            <FieldArray name={`${chapter}.topics`} component={renderTopics} />
          </li>
        ))}
      </ul>
    );

    const renderTopics = ({ fields, meta: { error } }) => (
      <ul>
        <li>
          <button type="button" onClick={() => fields.push()}>
            Add Topic
          </button>
        </li>
        {fields.map((topic, index) => (
          <li key={index}>
            <button
              type="button"
              title="Remove Topic"
              onClick={() => fields.remove(index)}
            />
            <Field
              name={topic}
              type="text"
              component={renderField}
              label={`Topic #${index + 1}`}
            />
            <Field
              name={`${topic}.description`}
              type="textarea"
              component={renderField}
              label="topic Description"
            />
            <Field
              name={`${topic}.video`}
              type="file"
              component={renderField}
              label="topic video"
              value={null}
            />
          </li>
        ))}
        {error && <li className="error">{error}</li>}
      </ul>
    );

    const { handleSubmit, pristine, previousPage, submitting } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        {/* <button>Add Chapter</button>
        <Chapter /> */}
        <FieldArray name="chapters" component={renderChapters} />
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
  }
}
export default reduxForm({
  form: "NewCourseForm",
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate
})(NewCourseFormFourthPage);

import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

class Topic extends Component {
  render() {
    return (
      <>
        <container className="topicContainer">
          <Field
            name="topic"
            type="text"
            placeholder="topic 1"
            component="input"
            label="topic"
          />
          <Field
            name="topic description"
            type="text"
            placeholder="topic description"
            component="input"
            label="topic"
          />

          <label htmlFor="videoUpload">Topic video</label>
          <div>
            <Field name="video" component="input" type="file" value={null} />
          </div>
          <button>Add Topic</button>
        </container>
      </>
    );
  }
}

export default Topic;

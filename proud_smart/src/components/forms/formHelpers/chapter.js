import React, { Component } from "react";
import Topic from "./topic";
import { Field, reduxForm } from "redux-form";

class Chapter extends Component {
  state = { chapters: [] };

  render() {
    return (
      <>
        <button type="button">Submit chapter</button>
        <container className="chapterContainer">
          <Field
            name="Chapter Title"
            type="text"
            placeholder="Chapter Title"
            component="input"
            label="Chapter"
          />

          <Field
            name="ChapterDescription"
            type="text"
            placeholder="ChapterDescription"
            component="textarea"
            label="Description"
          />
        </container>
      </>
    );
  }
}

export default Chapter;

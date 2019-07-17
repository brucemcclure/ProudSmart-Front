import React, { Component } from "react";
import Topic from "./topic";
import { Field, reduxForm } from "redux-form";

class Chapter extends Component {
  render() {
    return (
      <>
        <container className="chapterContainer">
          <Field
            name="Chapter"
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
          <div>
            <Topic />
          </div>
          <button>Add Chapter</button>
        </container>
      </>
    );
  }
}

export default Chapter;

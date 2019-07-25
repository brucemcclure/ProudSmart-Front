import React, { Component } from "react";
import { Field, reduxForm, FieldArray } from "redux-form";
import validateChaptersandTopics from "../formHelpers/validateChaptersandTopics";
import renderField from "./../formHelpers/renderField";
import LocalAPI from "../../../apis/Local";
import $ from "jquery"; //Joshua
import ReactPlayer from "react-player"; //Joshua
import renderFile from "../formHelpers/renderFile";
import { connect } from "react-redux";

const required = value => (value ? undefined : "Required");

class NewCourseFormFourthPage extends Component {
  constructor(props) {
    super(props);
    this.selectedVideoInput = React.createRef();
    this.state = {
      uploading: false,
      selectedVideoFile: null,
      selectedVideoNameArray: [],
      videoFile: null,
      videoUrlArray: []
    };
  }
  

  addTest = (stateObject, index, url) => {
    this.props.change(`${stateObject}.${index}`, url);
  };
  addTopicTest = (stateObject, url) => {
    this.props.change(`${stateObject}.url`, url);
  };

  /**
   * Joshua single video file upload
   */

  videoFileChangeHandler = event => {
    // console.log(event.target.files); //this will show you whats inside the event target.
    const { selectedVideoNameArray } = this.state;
    selectedVideoNameArray.push(event.target.files[0].name);
    this.setState({
      [event.target.name]: event.target.files[0],
      selectedVideoNameArray
    });
    //console.log(this.state.selectedVideoFile);
  };

  singleVideoFileUploadHandler = (event, topic) => {
    event.preventDefault();
    this.setState({
      uploading: true
    });
    const data = new FormData();
    // If file selected
    if (this.state.selectedVideoFile) {
      data.append(
        "singleVideo", //this is from the backend profile.js api
        this.state.selectedVideoFile,
        this.state.selectedVideoFile.name
      );
      LocalAPI
        //this route is the same as it is in the router.post
        .post("/video-upload/single-video-upload", data, {
          //this is important for the file tobe accepted on serverside
          headers: {
            accept: "application/json",
            "Accept-Language": "en-US,en;q=0.8",
            "Content-Type": `multipart/form-data; boundary=${data._boundary}`
          }
        })
        .then(response => {
          if (response.status === 200) {
            // If file size is larger than expected.
            if (response.data.error) {
              if (response.data.error.code === "LIMIT_FILE_SIZE") {
                this.ocShowAlert("Max size: 100MB", "red");
              } else {
                // console.log(response.data);
                // If not the given file type
                this.ocShowAlert(response.data.error, "red");
              }
            } else {
              // Success
              this.setState({
                uploading: false //when uploading finised, the state turns into false
              });
              let fileData = response.data;
              let { videoUrlArray } = this.state;
              videoUrlArray.push(fileData.location);
              this.setState({ videoFile: fileData, videoUrlArray });
              // console.log("video name", fileData.video); //video name is here
              // console.log("video url", fileData.location); //video url is here
              // JOSH THIS IS WHERE WE PUSH VIDEO URL TO REDUX FORM STATE - BILLY
              this.props.change(`${topic}.videoUrl`, fileData.location);
              // this.props.change(`${topic}.fileName`, fileData.video);
              this.ocShowAlert("File Uploaded", "#3089cf");
            }
          }
        })
        .catch(error => {
          // If another error
          this.ocShowAlert(error, "red");
        });
    } else {
      // if file not selected throw error
      this.ocShowAlert("Please upload file", "red");
    }
  };
  //////Alert method for video file not meet upload requirements
  ocShowAlert = (message, background = "#3089cf") => {
    let alertContainer = document.querySelector("#oc-alert-container"),
      alertEl = document.createElement("div"),
      textNode = document.createTextNode(message);
    alertEl.setAttribute("class", "oc-alert-pop-up");
    $(alertEl).css("background", background);
    alertEl.appendChild(textNode);
    alertContainer.appendChild(alertEl);
    setTimeout(function() {
      $(alertEl).fadeOut("slow");
      $(alertEl).remove();
    }, 3000);
  };
  ///////////Above is upload related content

  render() {
    // console.log("....................");
    // console.log(this.props);
    // console.log("!!!!!!!!!!!");
    // console.log(this.state);
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
              validate={required}
            />
            <Field
              name={`${chapter}.description`}
              type="textarea"
              component={renderField}
              label="Chapter Description"
              validate={required}
            />
            {this.addTest(chapter, index, "testing")}
            <FieldArray name={`${chapter}.topics`} component={renderTopics} />
          </li>
        ))}
      </ul>
    );

    const renderTopics = ({ fields, meta: { error } }) => {
      const {
        videoFile,
        uploading,
        selectedVideoFile,
        videoUrlArray,
        selectedVideoNameArray
      } = this.state;
      return (
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
                name={`${topic}.title`}
                type="text"
                component={renderField}
                label={`Topic #${index + 1}`}
                validate={required}
              />
              <Field
                name={`${topic}.description`}
                type="textarea"
                component={renderField}
                label="topic Description"
                validate={required}
              />
              {/**Joshua changes this part */}
              <div>
                {/* For Alert box*/}
                <div id="oc-alert-container" />
                {videoFile === null ? (
                  <></>
                ) : (
                  <ReactPlayer url={videoUrlArray[index]} controls={true} />
                )}
                {/**?? the latter topic's video url will replace the former one's video url */}
                <div id={videoFile && videoFile.video}>
                  <h2>{uploading ? "Uploading..." : null}</h2>
                </div>

                <div>
                  <p>(Only mp4 file less than 100MB allowed)</p>
                  {/**no file chosen sign doesn't change even filed selected, so I created the button following this input element */}
                  <input
                    ref={this.selectedVideoInput}
                    type="file"
                    name="selectedVideoFile"
                    onChange={this.videoFileChangeHandler}
                    style={{ display: "none" }}
                  />
                  {/** this button element is to invoke the input element above, and do exactly what that input element would do, we need to change the state name of "selectedVideoInput" for another topic input   */}
                  <p>{selectedVideoFile && selectedVideoNameArray[index]}</p>
                  <button
                    onClick={event => {
                      event.preventDefault();
                      this.selectedVideoInput.current.click();
                    }}
                  >
                    Choose File
                  </button>
                </div>

                <button
                  className="btn btn-info"
                  onClick={event =>
                    this.singleVideoFileUploadHandler(event, topic)
                  }
                >
                  Upload a video!
                </button>
              </div>
              {/** */}
            </li>
          ))}
          {error && <li className="error">{error}</li>}
        </ul>
      );
    };

    const { handleSubmit, pristine, previousPage, submitting } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <FieldArray name="chapters" component={renderChapters} />
        <div>
          <button type="button" className="previous" onClick={previousPage}>
            Previous
          </button>
          {/** */}
          <button type="submit" onClick={handleSubmit}>
            Submit
          </button>
          {/** */},
        </div>
      </form>
    );
  }
}

export default reduxForm({
  form: "NewCourseForm",
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validateChaptersandTopics
})(NewCourseFormFourthPage);

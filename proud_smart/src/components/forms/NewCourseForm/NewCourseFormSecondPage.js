import React, { Component } from "react";
import renderCheckbox from "../formHelpers/renderCheckbox";
import { Field, reduxForm } from "redux-form";
import validate from "../formHelpers/validate";
import renderField from "../formHelpers/renderField";
import renderFile from "../formHelpers/renderFile";
import LocalAPI from "./../../../apis/Local"; //Joshua
import $ from "jquery"; //Joshua

const renderError = ({ meta: { touched, error } }) =>
  touched && error ? <span>{error}</span> : false;
class NewCourseFormSecondPage extends Component {
  state = {
    ///// Joshua
    selectedFile: null, //for single image file upload
    file: null, //single image file, single image
    ////
    selectedFiles: null, //document files upload
    files: null //multiple course document files
  };

  /**
   * Joshua course profile image single file upload
   */
  addAWSImageToFormValues = (formField, url) => {
    this.props.change(formField, url);
  }

  singleFileChangedHandler = event => {
    console.log(event.target.files); //this will show you whats inside the event target.
    this.setState({
      selectedFile: event.target.files[0]
    });
    console.log(this.state.selectedFile);
  };

  singleFileUploadHandler = event => {
    event.preventDefault();
    const data = new FormData();
    // If file selected
    if (this.state.selectedFile) {
      data.append(
        "courseProfileImage",
        this.state.selectedFile,
        this.state.selectedFile.name
      );
      LocalAPI.post("/image-upload/courseProfile-img-upload", data, {
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
                this.ocShowAlert("Max size: 2MB", "red");
              } else {
                console.log(response.data);
                // If not the given file type
                this.ocShowAlert(response.data.error, "red");
              }
            } else {
              // Success
              
              let fileData = response.data;
              this.props.change("courseProfilePictureUrl", fileData.location);
              this.setState({ file: fileData });
              console.log("file data image name", fileData.image); //joshua file.image
              console.log("file data image location", fileData.location);
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

  /**Multiple files upload */
  multipleFileChangedHandler = event => {
    this.setState({
      selectedFiles: event.target.files
    });
    console.log(this.state.selectedFiles);
  };

  multipleFileUploadHandler = event => {
    event.preventDefault();
    const data = new FormData();
    let { selectedFiles } = this.state; // this.state.selectedFiles recieved the data from the multipleFileChangedHandler
    // If file selected
    if (selectedFiles) {
      for (let i = 0; i < selectedFiles.length; i++) {
        data.append("multipleFiles", selectedFiles[i], selectedFiles[i].name);
      }
      LocalAPI.post("/docs-upload/multiple-files-upload", data, {
        headers: {
          accept: "application/json",
          "Accept-Language": "en-US,en;q=0.8",
          "Content-Type": `multipart/form-data; boundary=${data._boundary}`
        }
      })
        .then(response => {
          console.log("res", response);
          if (200 === response.status) {
            // If file size is larger than expected.
            if (response.data.error) {
              if (response.data.error.code === "LIMIT_FILE_SIZE") {
                this.ocShowAlert("Max size: 10MB", "red");
              } else if (response.data.error.code === "LIMIT_UNEXPECTED_FILE") {
                this.ocShowAlert("Max 4 files allowed", "red");
              } else {
                // If not the given ile type
                this.ocShowAlert(response.data.error, "red");
              }
            } else {
              // Success
              let filesData = response.data;
              this.props.change("materialsUrl", filesData.locationArray);
              this.setState({ files: filesData });
              console.log("files names array", filesData.filesArray);
              console.log("files locations array", filesData.locationArray);
              this.ocShowAlert("Files Uploaded", "#3089cf");
            }
          }
        })
        .catch(error => {
          // If another error
          this.ocShowAlert(error, "red");
        });
    } else {
      //if file not selected throw error
      this.ocShowAlert("Please upload file", "red");
    }
  };
  //////Multiple files upload END///

  ocShowAlert = (message, background = "#3089cf") => {
    let alertContainer = document.getElementById("oc-alert-container"),
      alertEl = document.createElement("div"),
      textNode = document.createTextNode(message);
    //console.log(alertContainer);
    alertEl.setAttribute("class", "oc-alert-pop-up");
    $(alertEl).css("background", background);
    alertEl.appendChild(textNode);
    alertContainer.appendChild(alertEl);
    setTimeout(function() {
      $(alertEl).fadeOut("slow");
      $(alertEl).remove();
    }, 3000);
  };

  render() {
    const { handleSubmit, previousPage } = this.props;
    const { file } = this.state; //Joshua
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="picturetoupload">Course profile picture</label>
          {/************* */}
          {/* For Alert box*/}
          <div id="oc-alert-container" />
          {/* alert && (
            <div id="oc-alert-container">
              <div
                className="oc-alert-pop-up"
                style={{ background: "#3089cf" }}
              >
                {alert}
              </div>
            </div>
          ) */}
          {/* Once you upload your profile picture, it should appear here  */}

          <div className="col-md-4 col-sm-4 text-center">
            <img
              className="btn-md"
              src={file && file.location} //joshua defaltProfileImgUrl
              alt={file && file.image} //joshua defaultProfileImgName
              style={{ borderRadius: "50%", height: "10em", width: "10em" }}
            />
          </div>

          <input type="file" onChange={this.singleFileChangedHandler} />
          <div className="mt-5">
            <button
              className="btn btn-info"
              onClick={this.singleFileUploadHandler}
            >
              Upload Course profile image
            </button>
          </div>
          <br />
          {/***************** */}
          {/**
          <div>
            <Field name="picture" component={renderFile} />
          </div>
          */}

          {/** Documents upload part */}
          <label htmlFor="documentupload">Documents to upload</label>
          <div
            className="card border-light mb-3"
            style={{ boxShadow: "0 5px 10px 2px rgba(195,192,192,.5)" }}
          >
            <div className="card-header">
              <p className="text-muted" style={{ marginLeft: "12px" }}>
                Upload Size: Max 10MB
              </p>
            </div>
            <div className="card-body">
              {/* NOTICE THERE IS A MULTIPLE ATTRIBUTE IN THIS INPUT TAG */}
              <input
                type="file"
                multiple
                onChange={this.multipleFileChangedHandler}
              />
              <div className="mt-5">
                <button
                  className="btn btn-info"
                  onClick={this.multipleFileUploadHandler}
                >
                  Upload course documents!
                </button>
              </div>
            </div>
          </div>
        </div>
        {/************* */}

        {/**
        <label htmlFor="documentupload">Documents to upload</label>
        <div>
          <Field name="documents" component={renderFile} />
        </div>
        */}

        <label htmlFor="Area of study">Is this course certified?</label>
        <Field name="certified" id="Certified" component={renderCheckbox} />
        <div>
          <div>
            <button type="button" className="previous" onClick={previousPage}>
              Previous
            </button>
            <button type="submit" className="next">
              Next
            </button>
          </div>
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
})(NewCourseFormSecondPage);

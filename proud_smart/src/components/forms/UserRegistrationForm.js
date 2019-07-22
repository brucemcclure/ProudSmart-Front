import React, { Component } from "react";
import { connect } from "react-redux";
import { setAuthToken } from "./../../actions";
import LocalAPI from "./../../apis/Local"; //Joshua
import $ from "jquery"; //Joshua

import "antd/dist/antd.css";
import "./../../index.css";
import {
  Form,
  Input,
  Icon,
  Select,
  Row,
  Col,
  Checkbox,
  Button,
  AutoComplete,
  Upload
} from "antd";

const { Option } = Select;
const AutoCompleteOption = AutoComplete.Option;

class RegistrationForm extends Component {
  state = {
    confirmDirty: false,
    autoCompleteResult: [],
    interestTags: ["IoT", "ML", "AI", "Cloud", "Dev Op", "Infrastructure"],

    ///// Joshua
    selectedFile: null, //for single image file upload
    file: null //single image file, single image
    ////
  };

  /**
   * Joshua profile image single file upload
   */

  singleFileChangedHandler = event => {
    console.log(event.target.files); //this will show you whats inside the event target.
    this.setState({
      selectedFile: event.target.files[0]
    });
  };

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

  singleFileUploadHandler = event => {
    const data = new FormData();
    // If file selected
    if (this.state.selectedFile) {
      data.append(
        "profileImage",
        this.state.selectedFile,
        this.state.selectedFile.name
      );
      LocalAPI.post("/image-upload/profile-img-upload", data, {
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

  ////

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        // console.log('Received values of form: ', values);
        // console.log(values.photo.file.uid);
        // console.log(process.env.REACT_APP_API_URL);
        console.log(this.state);
        LocalAPI.post(`/auth/register`, {
          profilePhotoUrl: this.state.file.location,
          values
        })
          .then(response => {
            this.props.setAuthToken(response.data);
            this.props.history.push("/users/dashboard");
          })
          .catch(err => console.log(err));
      }
    });
  };

  componentDidMount = () => {
    console.log(this.props);
  };

  handleConfirmBlur = e => {
    const { value } = e.target;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  };

  compareToFirstPassword = (rule, value, callback) => {
    const { form } = this.props;
    if (value && value !== form.getFieldValue("password")) {
      callback("Two passwords that you enter is inconsistent!");
    } else {
      callback();
    }
  };

  validateToNextPassword = (rule, value, callback) => {
    const { form } = this.props;
    if (value && this.state.confirmDirty) {
      form.validateFields(["confirm"], { force: true });
    }
    callback();
  };

  handleWebsiteChange = value => {
    let autoCompleteResult;
    if (!value) {
      autoCompleteResult = [];
    } else {
      autoCompleteResult = [".com", ".org", ".net"].map(
        domain => `${value}${domain}`
      );
    }
    this.setState({ autoCompleteResult });
  };

  dummyRequest({ file, onSuccess }) {
    setTimeout(() => {
      onSuccess("ok");
    }, 0);
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const { file } = this.state; //Joshua
    const defaltProfileImgUrl =
      "https://proudsmarts3bucket.s3-ap-southeast-2.amazonaws.com/profile_pictures/defaultAvatarImage.jpg"; //Joshua
    const defaultProfileImgName = "Proudsmart logo image";

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 }
      }
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0
        },
        sm: {
          span: 16,
          offset: 8
        }
      }
    };
    const prefixSelector = getFieldDecorator("prefix", {
      initialValue: "86"
    })(
      <Select style={{ width: 70 }}>
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    );
    return (
      <Form {...formItemLayout} onSubmit={this.handleSubmit}>
        <Form.Item label="E-mail">
          {getFieldDecorator("email", {
            rules: [
              {
                type: "email",
                message: "The input is not valid E-mail!"
              },
              {
                required: true,
                message: "Please input your E-mail!"
              }
            ]
          })(<Input />)}
        </Form.Item>
        <Form.Item label="Password" hasFeedback>
          {getFieldDecorator("password", {
            rules: [
              {
                required: true,
                message: "Please input your password!"
              },
              {
                validator: this.validateToNextPassword
              }
            ]
          })(<Input.Password />)}
        </Form.Item>
        <Form.Item label="Confirm Password" hasFeedback>
          {getFieldDecorator("confirm", {
            rules: [
              {
                required: true,
                message: "Please confirm your password!"
              },
              {
                validator: this.compareToFirstPassword
              }
            ]
          })(<Input.Password onBlur={this.handleConfirmBlur} />)}
        </Form.Item>
        <Form.Item label="First Name" hasFeedback>
          {getFieldDecorator("firstName", {
            rules: [
              {
                required: true,
                message: "Please input your first name",
                whitespace: true
              }
            ]
          })(<Input />)}
        </Form.Item>
        <Form.Item label="Last Name" hasFeedback>
          {getFieldDecorator("lastName", {
            rules: [
              {
                required: true,
                message: "Please input your last name",
                whitespace: true
              }
            ]
          })(<Input />)}
        </Form.Item>
        <Form.Item label="Study Interests">
          {getFieldDecorator("interestTags", {
            initialValue: ["A", "B"]
          })(
            <Checkbox.Group style={{ width: "100%" }}>
              <Row>
                {this.state.interestTags.map(option => {
                  return (
                    <div key={option}>
                      <Col span={8}>
                        <Checkbox value={option}>{option}</Checkbox>
                      </Col>
                    </div>
                  );
                })}
              </Row>
            </Checkbox.Group>
          )}
        </Form.Item>

        {/** */}
        {/* For Alert box*/}
        <div id="oc-alert-container" />
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
            Upload Avatar Image
          </button>
        </div>
        {/***************** */}

        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            Register
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

const WrappedRegistrationForm = Form.create({ name: "register" })(
  RegistrationForm
);

export default connect(
  null,
  { setAuthToken }
)(WrappedRegistrationForm);

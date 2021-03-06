import { Form, Icon, Input, Button} from "antd";
import React, { Component } from "react";
import { connect } from "react-redux";
import { setAuthToken, setUser, setPurchasedCoursesIds } from "./../../actions";
import LocalAPI from "./../../apis/Local";

class LoginForm extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      // Pulling the username and password off the submited form data
      const { email, password } = values;
      // If the user has submitted the form correctly post the data to the server
      if (!err) {
        LocalAPI.post(`/auth/login`, { email, password })
          .then(response => {
            const { token, userInfo, purchasedCoursesIds } = response.data;
            // console.log("response.data");
            
            // console.log(response.data);
            // console.log("response.data");
            this.props.setAuthToken(token);
            this.props.setUser(userInfo);
            this.props.setPurchasedCoursesIds(purchasedCoursesIds);
            this.props.history.push("/users/dashboard");
          })
          .catch(err => console.log(err));
        // console.log("Received values of form: ", values);
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <Form.Item>
          {getFieldDecorator("email", {
            rules: [{ required: true, message: "Please input your username!" }]
          })(
            <Input
              prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="email"
            />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator("password", {
            rules: [{ required: true, message: "Please input your Password!" }]
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
              type="password"
              placeholder="Password"
            />
          )}
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Log in
          </Button>
          Or <a href="/auth/register">register now!</a>
        </Form.Item>
      </Form>
    );
  }
}

const WrappedLoginForm = Form.create({ name: "normal_login" })(LoginForm);

export default connect(
  null,
  { setAuthToken, setUser, setPurchasedCoursesIds }
)(WrappedLoginForm);

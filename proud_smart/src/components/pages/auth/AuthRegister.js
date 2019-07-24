import React, { Component } from "react";
import WrappedRegistrationForm from "./../../forms/UserRegistrationForm";

class AuthRegister extends Component {
  componentDidMount = () => {
    console.log(this.props);
  };
  render() {
    return (
      <div className="container">
        <h1>Register</h1>
        <WrappedRegistrationForm history={this.props.history} />
      </div>
    );
  }
}

export default AuthRegister;

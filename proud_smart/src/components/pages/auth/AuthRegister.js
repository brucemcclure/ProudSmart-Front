import React, { Component } from "react";
import WrappedRegistrationForm from "./../../forms/UserRegistrationForm";

class AuthRegister extends Component {
  render() {
    return (
      <div>
        <h1>Register</h1>;
        <WrappedRegistrationForm />
      </div>);
  }
}

export default AuthRegister;

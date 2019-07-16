import React, { Component } from "react";
import WrappedLoginForm from "./../../forms/LoginForm";

class AuthLogin extends Component {
  render() {
    return (
      <div> 
        <h1>Login</h1>;
        <WrappedLoginForm history={this.props.history} />
      </div>
    )
    
  }
}

export default AuthLogin;

import React, { Component } from "react";
import EditUserForm from "./../../forms/EditUserForm";

class UsersEdit extends Component {
  render() {
    console.log(this.props + `This is what im looking at`);
    return (
      <div className="container">
        <h1>This is the UsersEdit</h1>
        <EditUserForm />
      </div>
    );
  }
}

export default UsersEdit;

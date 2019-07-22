import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Menu } from "antd";
import LocalAPI from "../../../apis/Local";

class SignedInLinks extends Component {
  componentDidMount() {
    LocalAPI("/users/account-info").then(response => {
      this.setState({ user: response.data });
      console.log(this.state.user + "This is the state");
    });
  }
  render() {
    return (
      <ul className="right">
        <li>
          <NavLink to="/">Shopping Cart</NavLink>
        </li>
        <li>
          <NavLink to="/users/dashboard">My Courses</NavLink>
        </li>
        <li>
          <NavLink
          // to={{
          //   pathname: `/users/edit/${this.props.user._id}`,
          //   state: { user: this.props.user }
          // }}
          >
            Edit Profile
          </NavLink>
        </li>
        <li>
          <NavLink to="/" className="btn btn-floating pink lighten-1">
            AF
          </NavLink>
        </li>
      </ul>
    );
  }
}
export default SignedInLinks;

// to={{
//   pathname: `/courses/edit/${this.props.course._id}`,
//   state: {
//     course: this.props.course
//   }
// }}

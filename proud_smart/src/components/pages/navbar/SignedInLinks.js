import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import LocalAPI from "../../../apis/Local";
import {connect} from "react-redux";
import {setAuthToken, setUser} from "./../../../actions";
import history from "./../../../history";

class SignedInLinks extends Component {
  onLogoutButtonClick = () => {
    this.props.setAuthToken("");
    this.props.setUser("");
    history.push("/");
  }

  render() {
    
    return (
      <ul className="right">
        <li>
          <NavLink to="/users/dashboard">Dashboard</NavLink>
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
        <li>
          <NavLink onClick={this.onLogoutButtonClick}>
            Logout
          </NavLink>
        </li>
      </ul>
    );
  }
}

const mapStateToProps = state => {
  return {
    token: state.auth.token
  };
};

export default connect(mapStateToProps, {setAuthToken, setUser})(SignedInLinks);

// to={{
//   pathname: `/courses/edit/${this.props.course._id}`,
//   state: {
//     course: this.props.course
//   }
// }}

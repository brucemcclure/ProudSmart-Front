import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import {connect} from "react-redux";
import {setAuthToken, setUser} from "./../../../../actions";
import history from "./../../../../history";
import AdminLinks from "./AdminLinks";
import EducatorLinks from "./EducatorLinks";
import UserLinks from "./UserLinks";

class SignedInLinks extends Component {
  onLogoutButtonClick = () => {
    this.props.setAuthToken("");
    this.props.setUser("");
    history.push("/");
  }

  render() {
    const {userType} = this.props;
    return (
      <>
        <li>
          <NavLink className="btn btn-floating pink lighten-1">
            AF
          </NavLink>
        </li>
        {userType === "admin" && <AdminLinks />}
        {userType === "educator" && <EducatorLinks />}
        {userType === "user" && <UserLinks />}
        <li>
          <NavLink onClick={this.onLogoutButtonClick}>
            Logout
          </NavLink>
        </li>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    token: state.auth.token,
    userType: state.user.userType
  };
};

export default connect(mapStateToProps, {setAuthToken, setUser})(SignedInLinks);

// to={{
//   pathname: `/courses/edit/${this.props.course._id}`,
//   state: {
//     course: this.props.course
//   }
// }}

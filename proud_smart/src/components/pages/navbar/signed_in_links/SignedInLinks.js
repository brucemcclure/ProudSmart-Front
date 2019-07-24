import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { setAuthToken, setUser } from "./../../../../actions";
import history from "./../../../../history";
import AdminLinks from "./AdminLinks";
import EducatorLinks from "./EducatorLinks";
import UserLinks from "./UserLinks";
import { withRouter } from "react-router-dom";

class SignedInLinks extends Component {
  onLogoutButtonClick = () => {
    this.props.setAuthToken("");
    this.props.setUser("");
    this.props.history.push("/");
  };

  render() {
    const { userType } = this.props;
    return (
      <>
        {userType === "admin" && <AdminLinks />}
        {userType === "educator" && <EducatorLinks />}
        {userType === "user" && <UserLinks />}
        <li>
          <NavLink onClick={this.onLogoutButtonClick}>Logout</NavLink>
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

export default connect(
  mapStateToProps,
  { setAuthToken, setUser }
)(withRouter(SignedInLinks));

// to={{
//   pathname: `/courses/edit/${this.props.course._id}`,
//   state: {
//     course: this.props.course
//   }
// }}

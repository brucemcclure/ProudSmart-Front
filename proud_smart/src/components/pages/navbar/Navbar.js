import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import SignedInLinks from "./signed_in_links/SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";
import { connect } from "react-redux";

class Navbar extends Component {
  render() {
    const { token } = this.props;
    return (
      <nav className="nav-wrapper grey darken-4">
        <div className="container">
          <Link to="/" className="brand-logo">
            Learning Platform
          </Link>
          <ul className="right">
            <li>
              <NavLink to="/courses">
                Available Courses
              </NavLink>
            </li>
            {!(token) && <SignedOutLinks />}
            {token && <SignedInLinks />}
          </ul>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = state => {
  return {
    token: state.auth.token
  };
};

export default connect(mapStateToProps)(Navbar);

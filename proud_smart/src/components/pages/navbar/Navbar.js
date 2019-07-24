import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import SignedInLinks from "./signed_in_links/SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";
import { connect } from "react-redux";
import M from "materialize-css";

class Navbar extends Component {
  componentDidMount() {
    const elems = document.querySelectorAll(".sidenav");
    const instances = M.Sidenav.init(elems, { edge: "right", inDuration: 250 });
  }
  render() {
    const { token } = this.props;
    return (
      <>
        <nav className="nav-wrapper grey darken-4">
          <div className="container">
            <Link to="/" className="brand-logo">
              Learning Platform
            </Link>
            <a href="#" data-target="mobile-demo" class="sidenav-trigger">
              <i class="material-icons">menu</i>
            </a>
            <ul className="right hide-on-med-and-down">
              <li>
                <NavLink to="/courses">Available Courses</NavLink>
              </li>
              {!token && <SignedOutLinks />}
              {token && <SignedInLinks />}
            </ul>
          </div>
        </nav>
        <ul className="right sidenav" id="mobile-demo">
          <li>
            <NavLink to="/courses">Available Courses</NavLink>
          </li>
          {!token && <SignedOutLinks />}
          {token && <SignedInLinks />}
        </ul>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    token: state.auth.token
  };
};

export default connect(mapStateToProps)(Navbar);

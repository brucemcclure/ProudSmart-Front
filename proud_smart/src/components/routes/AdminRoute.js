import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const AdminRoute = ({ component: Component, token, userId, userType, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        if (token && (userType === "admin")) {
          return <Component {...props} />;
        }

        return <Redirect to="/" />;
      }}
    />
  );
};

const mapStateToProps = state => {
  const { userId, userType } = state.user;
  return {
    token: state.auth.token,
    userId,
    userType
  };
};

export default connect(mapStateToProps)(AdminRoute);

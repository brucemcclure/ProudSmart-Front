import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const EducatorProfileRoute = ({ component: Component, educator,  ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        if (educator) {
          return <Component {...props} />;
        }

        return <Redirect to="/" />;
      }}
    />
  );
};

const mapStateToProps = state => {
  return {
    token: state.auth.token,
    educator: state.educator.educatorProfile
  };
};

export default connect(mapStateToProps)(EducatorProfileRoute);
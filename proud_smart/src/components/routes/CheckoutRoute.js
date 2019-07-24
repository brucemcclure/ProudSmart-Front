import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const CheckoutRoute = ({ component: Component, token, course, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        if (token && course) {
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
    course: state.course.displayedCourse
  };
};

export default connect(mapStateToProps)(CheckoutRoute);
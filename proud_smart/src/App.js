import React, { Component } from "react";
import "./styles/styles.css";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import LocalAPI from "./apis/Local";

import LandingPage from "./components/pages/landing/LandingPage";
import AuthLogin from "./components/pages/auth/AuthLogin";
import AuthRegister from "./components/pages/auth/AuthRegister";
import AuthEducatorApplication from "./components/pages/auth/AuthEducatorApplication";
import AdminDashboard from "./components/pages/admin/AdminDashboard";
import AdminTeachers from "./components/pages/admin/AdminTeachers";
import AdminUsers from "./components/pages/admin/AdminUsers";
import UsersDashboard from "./components/pages/user/UsersDashboard";
import UsersEdit from "./components/pages/user/UsersEdit";
import CoursesIndex from "./components/pages/course/CoursesIndex";
import CoursesShow from "./components/pages/course/CoursesShow";
import CoursesNew from "./components/pages/course/CoursesNew";
import CoursesDashboard from "./components/pages/course/CoursesDashboard";
import CoursesEdit from "./components/pages/course/CoursesEdit";
import CourseApplications from "./components/pages/admin/CourseApplications";
import EducatorsProfile from "./components/pages/educator/EducatorsProfile";
import EducatorsDashboard from "./components/pages/educator/EducatorsDashboard";
import Navbar from "./components/pages/navbar/Navbar";
import Footer from "./components/pages/footer/Footer";
import PrivateRoute from "./components/PrivateRoute";

// Stripe elements
import Checkout from "./components/pages/checkout/Checkout";

class App extends Component {
  constructor(props) {
    super(props);
    const token = sessionStorage.getItem("token") || null;
    this.state = { token };
    if (token) {
      LocalAPI.setAuthHeader(token);
    }
  }

  render() {
    return (
      <BrowserRouter>
        <header>
          <Navbar />
        </header>
        <main>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/auth/login" component={AuthLogin} />
          <Route exact path="/auth/register" component={AuthRegister} />
          <Route
            exact
            path="/auth/educator_application"
            component={AuthEducatorApplication}
          />
          <Route exact path="/admin/dashboard" component={AdminDashboard} />
          <Route exact path="/admin/educators" component={AdminTeachers} />
          <Route exact path="/admin/users" component={AdminUsers} />
          <PrivateRoute
            exact
            path="/users/dashboard"
            component={UsersDashboard}
          />
          <Route
            exact
            path="/users/edit"
            render={props => <UsersEdit {...props} />}
          />
          <Route exact path="/courses" component={CoursesIndex} />
          <Route
            exact
            path="/courses/show/:id"
            render={props => <CoursesShow {...props} />}
          />
          <Route
            exact
            path="/courses/dashboard/:id"
            render={props => <CoursesDashboard {...props} />}
          />
          <Route exact path="/courses/index" component={CoursesIndex} />
          <Route exact path="/courses/new" component={CoursesNew} />
          <Route exact path="/courses/edit/:id" component={CoursesEdit} />
          <Route
            exact
            path="/educators/profile/:id"
            component={EducatorsProfile}
          />{" "}
          <Route
            exact
            path="/educators/dashboard"
            component={EducatorsDashboard}
          />{" "}
          <Route exact path="/checkout" component={Checkout} />
          <Route exact path="/admin/course-applications" component={CourseApplications} />
        </main>
        <Footer />
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => {
  return {
    token: state.auth.token
  };
};

export default connect(mapStateToProps)(App);

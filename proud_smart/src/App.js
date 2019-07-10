import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import LandingPage from "./LandingPage";
import AuthLogin from "./AuthLogin";
import AuthRegister from "./AuthRegister";
import AuthEducatorApplication from "./AuthEducatorApplication";
import AdminDashboard from "./AdminDashboard";
import AdminTeachers from "./AdminTeachers";
import AdminUsers from "./AdminUsers";
import UsersDashboard from "./UsersDashboard";
import UsersEdit from "./UsersEdit";
import CoursesIndex from "./CoursesIndex";
import CoursesShow from "./CoursesShow";
import CoursesNew from "./CoursesNew";
import CoursesDashboard from "./CoursesDasboard";
import CoursesEdit from "./CoursesEdit";
import EducatorsProfile from "./EducatorsProfile";
import EducatorsDashboard from "./EducatorsDashboard";

class App extends Component {
  state = { location: "LandingPage" };

  render() {
    return (
      <div>
        <LandingPage />
        <AuthLogin />
        <AuthRegister />
        <AuthEducatorApplication />
        <AdminDashboard />
        <AdminTeachers />
        <AdminUsers />
        <UsersDashboard />
        <UsersEdit />
        <CoursesIndex />
        <CoursesShow />
        <CoursesNew />
        <CoursesDashboard />
        <CoursesEdit />
        <EducatorsProfile />
        <EducatorsDashboard />
      </div>
    );
  }
}

export default App;

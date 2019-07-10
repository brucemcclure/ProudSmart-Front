import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import AuthLogin from "./pages/auth/AuthLogin";
import AuthRegister from "./pages/auth/AuthRegister";
import AuthEducatorApplication from "./pages/auth/AuthEducatorApplication";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminTeachers from "./pages/admin/AdminTeachers";
import AdminUsers from "./pages/admin/AdminUsers";
import UsersDashboard from "./pages/user/UsersDashboard";
import UsersEdit from "./pages/user/UsersEdit";
import CoursesIndex from "./pages/course/CoursesIndex";
import CoursesShow from "./pages/course/CoursesShow";
import CoursesNew from "./pages/course/CoursesNew";
import CoursesDashboard from "./pages/course/CoursesDasboard";
import CoursesEdit from "./pages/course/CoursesEdit";
import EducatorsProfile from "./pages/educator/EducatorsProfile";
import EducatorsDashboard from "./pages/educator/EducatorsDashboard";

class App extends Component {
  state = { location: "LandingPage" };

  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Link to="/">LandingPage</Link>
          </div>
          <div>
            <Link to="/auth/login">AuthLogin</Link>
          </div>
          <div>
            <Link to="/auth/register">AuthRegister</Link>
          </div>
          <div>
            <Link to="/auth/educator_application">AuthEducatorApplication</Link>
          </div>
          <div>
            <Link to="/admin/dashboard">AdminDashboard</Link>
          </div>
          <div>
            <Link to="/admin/educators">AdminTeachers</Link>
          </div>
          <div>
            <Link to="/admin/users">AdminUsers</Link>
          </div>
          <div>
            <Link to="/users/dashboard">UsersDashboard</Link>
          </div>
          <div>
            <Link to="/users/edit">UsersEdit</Link>
          </div>
          <div>
            <Link to="/courses">CoursesIndex</Link>
          </div>
          <div>
            <Link to="/courses/show">CoursesShow</Link>
          </div>
          <div>
            <Link to="/courses/dasboard">CoursesDashboard</Link>
          </div>
          <div>
            <Link to="/courses/new">CoursesNew</Link>
          </div>
          <div>
            <Link to="/courses/edit">CoursesEdit</Link>
          </div>
          <div>
            <Link to="/educators/profile">EducatorsProfile</Link>
          </div>
          <div>
            <Link to="/educators/dashboard">EducatorsDashboard</Link>
          </div>

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
          <Route exact path="/users/dashboard" component={UsersDashboard} />
          <Route exact path="/users/edit" component={UsersEdit} />
          <Route exact path="/courses" component={CoursesIndex} />
          <Route exact path="/courses/show" component={CoursesShow} />
          <Route exact path="/courses/dasboard" component={CoursesDashboard} />
          <Route exact path="/courses/new" component={CoursesNew} />
          <Route exact path="/courses/edit" component={CoursesEdit} />
          <Route exact path="/educators/profile" component={EducatorsProfile} />
          <Route
            exact
            path="/educators/dashboard"
            component={EducatorsDashboard}
          />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import Image from "./../../images/profilepicture.jpeg";
import { Divider } from "antd";
import SquareCard from "./../../cards/SquareCard";
import LocalAPI from "./../../../apis/Local";
import {connect} from "react-redux";

const squareCardContainer = {
  display: "flex",
  flexDirection: "row",
  width: "100%",
  flexWrap: "wrap"
};

class EducatorsProfile extends Component {

  render() {
    const {profile, courses} = this.props;
    ///change the line below when actual image in the seeds file
    const imageSrc = Image; 
    return (
      <div className="container">
        {profile && courses &&
          <div className="row section">
            <div className="col s12 m3">
              <img src={imageSrc} style={{ width: "100%" }} alt="" />
            </div>
            <div className="col s12 m9">
              <div className="section">
                <h3>{profile.firstName + " " + profile.lastName}</h3>
                <p>
                  {profile.aboutMe}
                </p>
              </div>
            </div>
            <div className="row section">
              <Divider orientation="left">{profile.firstName}'s Courses</Divider>
              {courses.map(course => {
                return (
                  <SquareCard course={course} />
                )
              })}
            </div>
          </div>
        }
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    profile: state.educator.educatorProfile,
    courses: state.educator.taughtCourses
  };
};

export default connect(mapStateToProps)(EducatorsProfile);

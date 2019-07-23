import React, { Component } from "react";
import { Layout, Divider, Button, Row, Col, List } from "antd";
import Chapters from "./Chapters";
import LocalAPI from "./../../../apis/Local";

class CoursesShow extends Component {
  state = {
    course: null,
    keyConcepts1: [],
    keyConcepts2: [],
    details: []
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    LocalAPI.get(`/courses/show/${id}`).then(res => {
      const course = res.data;
      console.log(res.data)
      this.setState({ course });
    });
  }

  populateListData() {
    console.log(this.state);
    const { course } = this.state;
    // this creates dataset for the "You Will Learn" section
    const keyConcepts1 = course.keyConcepts.filter(
      (item, index) => index % 2 === 0
    );
    const keyConcepts2 = course.keyConcepts.filter(
      (item, index) => index % 2 === 1
    );
    console.log(course);
    // this feeds data into the list in the sider
    const details = [
      {
        title: "materials",
        description: course.materialsUrl
      },
      {
        title: "tags",
        description: course.interestTags
      }
    ];

    this.setState({ keyConcepts1, keyConcepts2, details });
  }

  render() {
    console.log(this.props);
    const { Sider, Content } = Layout;
    const { course, keyConcepts1, keyConcepts2, details } = this.state;

    if (course && keyConcepts1.length === 0) {
      // this.populateListData();
    }
    return (
      <>
        
      </>
    );
  }
}

export default CoursesShow;

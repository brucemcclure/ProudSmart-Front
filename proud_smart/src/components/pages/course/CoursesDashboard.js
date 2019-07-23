import React, { Component } from "react";
import { Layout, Divider, Row, List, Col } from "antd";
import Chapters from "./Chapters";
import LocalAPI from "./../../../apis/Local";

class CoursesDashboard extends Component {
  state = {
    course: null
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    LocalAPI.get(`/courses/dashboard/${id}`).then(res => {
      console.log(res.data);
      const course = res.data;
      this.setState({ course });
    });
    // LocalAPI("/users/dashboard").then(response => {
    //   console.log(response.data);
    //   this.setState({ user: response.data });
    // });
  }

  render() {
    const { course } = this.state;
    const { Sider, Content } = Layout;
    return (
      <>
        {course ? (
          <Layout style={{ minHeight: "100vh", width: "100vw" }}>
            <Content>
              <div className="video-container">
                <iframe
                  width="800"
                  height="480"
                  src="https://www.youtube.com/embed/M7lc1UVf-VE?autoplay=1&origin=http://example.com"
                  frameborder="0"
                  allowfullscreen
                />
              </div>
              <div className="section">
                <div className="row">
                  <div className="col s6 left-align">
                    <h3>{course.title}</h3>
                  </div>
                  <div className="col s6 right-align">
                    <h5>Course Content</h5>
                  </div>
                </div>
                <div className="row">
                  <h4>{course.description}</h4>
                </div>
                <Divider />
                <div className="row">
                  <div className="col s4">
                    <h5>Skills Learned</h5>
                    <List
                      dataSource={course.keyConcepts}
                      renderItem={item => <List.Item>{item}</List.Item>}
                      split={false}
                    />
                  </div>
                  <div className="col s4">
                    <h5>Tags</h5>
                    <List
                      dataSource={course.interestTags}
                      renderItem={item => <List.Item>{item}</List.Item>}
                      split={false}
                    />
                  </div>
                  <div className="col s4">
                    <h5>Course Materials</h5>
                    <List
                      dataSource={course.materialsUrl}
                      renderItem={item => <List.Item>{item}</List.Item>}
                      split={false}
                    />
                  </div>
                  <Divider />
                </div>
                <div className="row">
                  <h5>About {course.educator}</h5>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolorum quos pariatur saepe odit ad reiciendis deleniti
                    doloribus. Alias natus unde nisi non et porro, beatae ad,
                    tempore magnam optio dolor.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolorum quos pariatur saepe odit ad reiciendis deleniti
                    doloribus. Alias natus unde nisi non et porro, beatae ad,
                    tempore magnam optio dolor.
                  </p>
                </div>
              </div>
            </Content>
            <Sider>
              <Chapters course={course} />
            </Sider>
          </Layout>
        ) : null}
      </>
    );
  }
}

export default CoursesDashboard;

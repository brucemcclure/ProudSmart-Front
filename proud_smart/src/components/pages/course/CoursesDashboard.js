import React, { Component } from "react";
import { Layout, Divider, Row, List, Col } from "antd";
import Chapters from "./Chapters";
import LocalAPI from "./../../../apis/Local";
import ReactPlayer from "react-player";
import {fetchEducator} from "./../../../actions";
import {connect} from "react-redux";
import { withRouter } from "react-router-dom";

class CoursesDashboard extends Component {
  state = {
    course: null,
    videoSrc: null
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    LocalAPI.get(`/courses/dashboard/${id}`).then(res => {
      const course = res.data;
      const defaultUrl =
        course.chapters &&
        course.chapters[0] &&
        course.chapters[0].topics[0] &&
        course.chapters[0].topics[0].videoUrl;
      this.setState({ course, videoSrc: defaultUrl });
    });
  }

  onTopicVideoClick = videoSrc => {
    console.log(`this is what we want ${videoSrc}`);
    this.setState({ videoSrc });
  };

  onEducatorButtonClick = async () => {
    const {course} = this.state;
    const {fetchEducator} = this.props;
    await fetchEducator(course.educatorId);
    this.props.history.push("/educators/profile");

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
                {/* <iframe
                  width="800"
                  height="480"
                  src="https://proudsmarts3bucket.s3.ap-southeast-2.amazonaws.com/videos/1-1563854513115.mp4"
                  frameborder="0"
                  allowfullscreen
                /> */}
                <ReactPlayer
                  url={this.state.videoSrc}
                  controls={true}
                  width="800"
                  height="480"
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
                  <button onClick={this.onEducatorButtonClick}>
                    <h5>About {course.educator}</h5>
                  </button>
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
            <Sider style={{ backgroundColor: "rgb(255, 255, 255)" }}>
              <Chapters
                course={course}
                onTopicVideoClick={this.onTopicVideoClick}
              />
            </Sider>
          </Layout>
        ) : null}
      </>
    );
  }
}

export default connect(null, {fetchEducator})(withRouter(CoursesDashboard));

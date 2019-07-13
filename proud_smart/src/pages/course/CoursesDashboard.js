import React, { Component } from "react";
import ReactPlayer from "react-player";
import { Layout, Divider } from "antd";
import Chapters from "./Chapters";

class CoursesDashboard extends Component {
  componentDidMount() {
    console.log("test");
  }

  render() {
    const { Sider, Content } = Layout;
    return (
      <Layout style={{ minHeight: "100vh" }}>
        <Content>
          <div className="video-container">
            <iframe
              width="853"
              height="480"
              src="https://www.youtube.com/embed/M7lc1UVf-VE?autoplay=1&origin=http://example.com"
              frameborder="0"
              allowfullscreen
            />
          </div>
          <div className="section">
            <div className="row">
              <div className="col s6 left-align">
                <h3>About This Course</h3>
                <h4>This is a good course</h4>
              </div>
              <div className="col s6 right-align">
                <h5>Course Content</h5>
              </div>
            </div>
            <Divider />
            <div className="row">
              <h5>Heading</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
                quos pariatur saepe odit ad reiciendis deleniti doloribus. Alias
                natus unde nisi non et porro, beatae ad, tempore magnam optio
                dolor.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
                quos pariatur saepe odit ad reiciendis deleniti doloribus. Alias
                natus unde nisi non et porro, beatae ad, tempore magnam optio
                dolor.
              </p>
            </div>
            <Divider />
            <div className="row">
              <h5>The Teacher</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
                quos pariatur saepe odit ad reiciendis deleniti doloribus. Alias
                natus unde nisi non et porro, beatae ad, tempore magnam optio
                dolor.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
                quos pariatur saepe odit ad reiciendis deleniti doloribus. Alias
                natus unde nisi non et porro, beatae ad, tempore magnam optio
                dolor.
              </p>
            </div>
          </div>
        </Content>
        <Sider>
          <Chapters />
        </Sider>
      </Layout>
    );
  }
}

export default CoursesDashboard;

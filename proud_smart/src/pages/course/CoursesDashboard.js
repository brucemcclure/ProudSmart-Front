import React, { Component } from "react";
import ReactPlayer from "react-player";
import { Layout },  from "antd";

class CoursesDashboard extends Component {
  componentDidMount() {
    console.log("test");
  }

  render() {
    const { Sider, Content } = Layout;
    return (
      <Layout>
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
          <h3>About This Course</h3>
        </Content>
        <Sider>
          
        </Sider>
      </Layout>
    );
  }
}

export default CoursesDashboard;

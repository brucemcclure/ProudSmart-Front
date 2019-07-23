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
      console.log(res.data);
      this.setState({ course });
    });
  }

  populateListData() {
    const { course } = this.state;

    // this creates dataset for the "You Will Learn" section
    const keyConcepts1 = course.keyConcepts.filter(
      (item, index) => index % 2 === 0
    );
    const keyConcepts2 = course.keyConcepts.filter(
      (item, index) => index % 2 === 1
    );
    // this feeds data into the list in the sider
    const details = [
      {
        title: "materials",
        description: course.materialsUrl.join(", ")
      },
      {
        title: "tags",
        description: course.interestTags.join(", ")
      }
    ];

    this.setState({ keyConcepts1, keyConcepts2, details });
  }

  render() {
    console.log(this.props);
    const { Sider, Content } = Layout;
    const { course, keyConcepts1, keyConcepts2, details } = this.state;

    if (course && keyConcepts1.length === 0) {
      this.populateListData();
    }
    return (
      <>
        {course ? (
          <Layout>
            <Content>
              <div className="section container">
                <h1>{course.title}</h1>
                <p>{course.description}</p>
              </div>
              <div className="section container">
                <h4>Recommended Prerequisites</h4>
                <List
                  dataSource={course.recommendedPrerequisites}
                  renderItem={item => <List.Item>{item}</List.Item>}
                />
              </div>
              <Divider />
              <div className="section container">
                <div style={{ border: "1px solid" }}>
                  <h3>You Will Learn</h3>
                  <Row gutter={24}>
                    <Col span={12}>
                      <List
                        dataSource={keyConcepts1}
                        renderItem={item => <List.Item>{item}</List.Item>}
                      />
                    </Col>
                    <Col span={12}>
                      <List
                        dataSource={keyConcepts2}
                        renderItem={item => <List.Item>{item}</List.Item>}
                      />
                    </Col>
                  </Row>
                </div>
                <Row style={{ marginTop: 25 }}>
                  <Col span={24}>
                    <Chapters course={course} style={{ width: "100%" }} />
                  </Col>
                </Row>
              </div>
            </Content>
            <Sider style={{ backgroundColor: "rgb(255, 255, 255)" }}>
              <div className="video-container">
                <iframe
                  src="https://www.youtube.com/embed/M7lc1UVf-VE?autoplay=1&origin=http://example.com"
                  frameborder="0"
                  allowfullscreen
                />
              </div>
              <div style={{ textAlign: "center" }}>
                <Button type="primary" size="large">
                  Add to Cart
                </Button>
              </div>
              <div style={{ textAlign: "center" }}>
                <Button size="large">Buy Now</Button>
              </div>
              {/* <Chapters /> */}
              <List
                itemLayout="horizontal"
                dataSource={details}
                renderItem={item => (
                  <List.Item>
                    <List.Item.Meta
                      title={item.title}
                      description={item.description}
                    />
                  </List.Item>
                )}
              />
            </Sider>
          </Layout>
        ) : null}
      </>
    );
  }
}

export default CoursesShow;

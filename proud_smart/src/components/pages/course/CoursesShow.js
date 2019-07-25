import React, { Component } from "react";
import { Layout, Divider, Button, Row, Col, List } from "antd";
import Chapters from "./Chapters";
import LocalAPI from "./../../../apis/Local";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { setCourse } from "./../../../actions/index";

class CoursesShow extends Component {
  state = {
    course: null,
    keyConcepts1: [],
    keyConcepts2: [],
    details: []
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    const { setCourse } = this.props;
    LocalAPI.get(`/courses/show/${id}`).then(res => {
      const course = res.data;
      setCourse(course);
      this.setState({ course });
    });
  }

  userHasPurchasedCourseOrIsAdmin() {
    const {userType, purchasedCoursesIds} = this.props;
    const {_id} = this.state.course;
    return userType && (userType === "admin" || purchasedCoursesIds.includes(_id));
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
        title: "tags",
        description: course.keyConcepts.join(", ")
      }
    ];

    this.setState({ keyConcepts1, keyConcepts2, details });
  }

  render() {
    const { Sider, Content } = Layout;
    const { course, keyConcepts1, keyConcepts2, details } = this.state;

    if (course && keyConcepts1.length === 0) {
      this.populateListData();
    }
    if (course) {
      // console.log(course.courseProfilePictureUrl);
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
              <img src={course.courseProfilePictureUrl} width="100%" alt={course.title} />
              <div style={{ textAlign: "center", marginTop: "15px" }}>
                <Link
                  to={{
                    pathname: "/checkout",
                    state: { course }
                  }}
                >
                  {(this.userHasPurchasedCourseOrIsAdmin())?  
                    <Link to={`/courses/dashboard/${course._id}`} >
                      <Button type="primary" size="large">
                        View Full Course
                      </Button>
                    </Link>
                    :
                    <Button type="primary" size="large">
                      Buy Now
                    </Button>
                  }
                  
                </Link>
              </div>
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

const mapPropsToState = (state) => {
  return {
    userType: state.user.userType,
    purchasedCoursesIds: state.purchasedCourses.purchasedCoursesIds
  }
}

export default connect(
  mapPropsToState,
  { setCourse }
)(CoursesShow);

import React, { Component } from "react";
import { Layout, Divider, Descriptions, Button, Row, Col, List } from "antd";
import Chapters from "./Chapters";

class CoursesShow extends Component {
  render() {
    console.log(this.props);
    const { Sider, Content } = Layout;
    const data = [
      "Programming languages",
      "Internet of things",
      "Our solutions",
      "ProudSmart Technologies",
      "Lots of other interesting things"
    ];
    return (
      <Layout>
        <Content>
          <div className="section">
            <h1>Course</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam
              quisquam et quas tempora assumenda, odit quam? Inventore rem id
              incidunt soluta vitae necessitatibus quae magnam placeat harum
              sint. Sed, libero. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Numquam nisi, aperiam officiis deserunt dolore
              eos quae vitae maiores rem, accusamus impedit quam perspiciatis
              asperiores? Perferendis iste asperiores sunt officia. Voluptatum.
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste
              exercitationem distinctio sapiente fugit labore possimus suscipit
              harum quo magni iusto veniam maxime optio odio magnam, odit
              incidunt corrupti eveniet aliquid?
            </p>
          </div>
          <Divider />
          <div className="section container">
            <div style={{ border: "1px solid" }}>
              <h3>You Will Learn</h3>
              <Row gutter={24}>
                <Col span={12}>
                  <List
                    dataSource={data}
                    renderItem={item => <List.Item>{item}</List.Item>}
                  />
                </Col>
                <Col span={12}>
                  <List
                    dataSource={data}
                    renderItem={item => <List.Item>{item}</List.Item>}
                  />
                </Col>
              </Row>
            </div>
            <Row style={{ marginTop: 25 }}>
              <Col span={24}>
                <Chapters style={{ width: "100%" }} />
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
          <Chapters />
        </Sider>
      </Layout>
    );
  }
}

export default CoursesShow;

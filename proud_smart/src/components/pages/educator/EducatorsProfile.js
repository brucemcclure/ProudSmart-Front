import React, { Component } from "react";
import Image from "./../../images/profilepicture.jpeg";
import { Divider } from "antd";
import SquareCard from "./../../cards/SquareCard";

const squareCardContainer = {
  display: "flex",
  flexDirection: "row",
  width: "100%",
  flexWrap: "wrap"
};

class EducatorsProfile extends Component {
  render() {
    return (
      <div className="container">
        <div className="row section">
          <div className="col s12 m3">
            <img src={Image} style={{ width: "100%" }} alt="" />
          </div>
          <div className="col s12 m9">
            <div className="section">
              <h3>Teacher</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Voluptas, quibusdam minus. Rem libero iste provident? Soluta
                quas iste, ducimus inventore nesciunt maiores, ipsam repellat
                voluptatum molestias aperiam omnis aspernatur quos.
              </p>
            </div>
          </div>
          <div className="row section">
            <Divider orientation="left">Teacher's Courses</Divider>
            <div style={squareCardContainer}>
              <SquareCard />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default EducatorsProfile;

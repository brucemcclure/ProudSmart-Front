import React, { Component } from "react";
import Image from "./../images/landing.jpeg";

const backgroundImageStyling = {
  backgroundImage: `url(${Image})`,
  height: "100vh",
  backgroundSize: "cover"
};

class backgroundImage extends Component {
  render() {
    return (
      <>
        <div style={backgroundImageStyling} />
      </>
    );
  }
}

export default backgroundImage;

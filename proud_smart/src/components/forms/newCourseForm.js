import React, {Component} from "react";
import {connect} from "react-redux";
import LocalAPI from "./../../apis/Local"

class newCourseForm extends Component {
  testRequest = async (event) => {
    // LocalAPI
  }
  render() {
    return <button onClick={this.testRequest}>Test the request</button>

  }
}

mapStatetoProps(state) = {

}

export default newCourseForm
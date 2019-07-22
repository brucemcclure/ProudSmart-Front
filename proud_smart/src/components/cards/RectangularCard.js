import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from "antd";
import LocalAPI from "./../../apis/Local";
import Image from "./../images/profilepicture.jpeg";
import {connect} from "react-redux";

const rectangleBackgroundImage = {
  backgroundImage: `url(${Image})`,
  height: "150px",
  width: "150px",
  backgroundSize: "contain"
};

const linkStye = {
  display: "block",
  height: "100%"
};

const rectangularCardHolder = {
  backgroundColor: "#4C9AB3",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  margin: "1.75%",
  boxShadow: "11px 11px 17px -7px rgba(0,0,0,0.67)"
};

const informationSection = {
  display: "flex",
  flexDirection: "column",
  padding: "20px"
};

const priceOrButtons = {
  width: "15%"
};

class RectangularCard extends Component {
  
  checkOwnerOrAdmin = () => {
    const {documentId, userId, userType} = this.props;
    return (documentId === userId || userType === "admin");
  };

  checkApplicationStatus = () => (this.props.approvalFunction && this.props.userType === "admin" && this.props.documentStatus === "applied");

  render() {
    const {showUrl, editUrl, title, body, photo, approvalFunction, denialFunction, deleteFunction, documentId, index} = this.props;
    return (
      <div key={title}>
        <div
          style={rectangularCardHolder}
          className="rectangularCardHolder"
        > 
          <Link to={showUrl} style={linkStye}>
            <div style={rectangleBackgroundImage}> </div>
          </Link>
          <div style={informationSection}>
           <h5>{title}</h5>
           <p>{body}</p>
          </div>
        
          {
            this.checkOwnerOrAdmin() 
            &&  
            <button>
              <Link to={editUrl} style={linkStye}>
                Edit
              </Link>
            </button>
          }
          {
            this.props.userType === "admin"
            &&
            <button onClick={() => {
              console.log(deleteFunction);
              deleteFunction(documentId, index);
            }}>Delete</button>
          }

          {
            this.checkApplicationStatus()
            &&
            <>
              <button onClick={() => approvalFunction(documentId, index)}>Approve</button>
              <button onCLick={() => denialFunction(documentId, index)}>Deny</button>
            </> 
          }

        </div>
      </div>
    )
  }
}

const mapPropsToState = (state) => {
  const {userId, userType} = state.user;
  return {
    userId,
    userType
  } 
}

export default connect(mapPropsToState)(RectangularCard);

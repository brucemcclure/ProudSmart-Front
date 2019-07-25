import React, { Component } from "react";
import { fetchEducator } from "./../../actions";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";

const linkStye = {
  display: "block",
  height: "100%"
};

const rectangularCardHolder = {
  backgroundColor: "#1C103F",
  color: "#F7F7F8",
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

class RectangularCard extends Component {
  checkOwnerOrAdmin = () => {
    const { token, educatorId, userId, userType } = this.props;
    return token && (educatorId === userId || userType === "admin");
  };

  checkApplicationStatus = () => {
    // console.log(`statement is ${(this.props.approvalFunction && this.props.userType === "admin" && this.props.documentStatus === "applied")}`)
    // console.log(this.props.approvalFunction);
    // console.log(this.props.userType,  this.props.documentStatus);
    return (
      this.props.approvalFunction &&
      this.props.userType === "admin" &&
      this.props.documentStatus === "applied"
    );
  };

  onEducatorButtonClick = async () => {
    const { fetchEducator, educatorId } = this.props;
    await fetchEducator(educatorId);
    this.props.history.push("/educators/profile");
  };

  render() {
    const {
      showUrl,
      editUrl,
      title,
      body,
      approvalFunction,
      denialFunction,
      deleteFunction,
      documentId,
      index,
      document,
      photo,
      educatorId,
      course
    } = this.props;
    // console.log(this.props);
    return (
      <div key={title}>
        <div style={rectangularCardHolder} className="rectangularCardHolder">
          {educatorId ? (
            <Link onClick={this.onEducatorButtonClick} style={linkStye}>
              <div
                style={{
                  backgroundImage: `url(${photo})`,
                  height: "150px",
                  width: "150px",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center"
                }}
              >
                {" "}
              </div>
            </Link>
          ) : (
            <Link to={showUrl} style={linkStye}>
              <div
                style={{
                  backgroundImage: `url(${photo})`,
                  height: "150px",
                  width: "150px",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center"
                }}
              >
                {" "}
              </div>
            </Link>
          )}
          <div style={informationSection}>
            <h5 style={{ color: "#F7F7F8" }}>{title}</h5>
            <p>{body}</p>
          </div>

          {this.checkOwnerOrAdmin() && (
            <button>
              <Link
                to={{
                  pathname: editUrl,
                  state: { course }
                }}
                style={linkStye}
              >
                Edit
              </Link>
            </button>
          )}
          {this.props.userType === "admin" && deleteFunction && (
            <button
              onClick={() => {
                // console.log(deleteFunction);
                deleteFunction(documentId, index);
              }}
            >
              Delete
            </button>
          )}

          {this.checkApplicationStatus() && (
            <>
              <button onClick={() => approvalFunction(document, index)}>
                Approve
              </button>
              <button onClick={() => denialFunction(document, index)}>
                Deny
              </button>
            </>
          )}
        </div>
      </div>
    );
  }
}

const mapPropsToState = state => {
  const { userId, userType } = state.user;
  return {
    userId,
    userType,
    token: state.auth.token
  };
};

export default connect(
  mapPropsToState,
  { fetchEducator }
)(withRouter(RectangularCard));

import React, { Component } from "react";
import RectangularCard from "./../../cards/RectangularCard";
import LocalAPI from "./../../../apis/Local";

class AdminTeachers extends Component {
  state = {
    educators: null
  }

  onEducatorApprovalButtonClick = (educator, index) => {
    const {educators} = this.state;
    LocalAPI.put("/admin/approve-application", {type: "user", document: educator})
      .then(response => {
        console.log(`educators b4`)
        console.log(educators)
        educators[`${index}`] = response.data;
        console.log(`educators after`)
        console.log(educators)
        this.setState({educators});
      })
      .catch(err => console.log(err))
  }

  onEducatorDenialButtonClick = (educator, index) => {
    const {educators} = this.state;
    LocalAPI.put("/admin/deny-application", {type: "user", document: educator})
      .then(response => {
        console.log(response);
        educators[`${index}`] = response.data;
        this.setState({educators});
      })
      .catch(err => console.log(err))
  }

  onEducatorDeleteButtonClick = (educator, index) => {

  };

  componentDidMount = async () => {
    LocalAPI("/educators")
      .then(response => {
        this.setState({educators: response.data})
        console.log(response.data)
      })
  };
  
  render() {
    const {educators} = this.state;
    console.log(educators);
    return (
      <>
        <h1>ProudSmart Educators</h1>
        <div className="container section">
          {educators && educators.map((educator, index) => {
            return (
              <RectangularCard
                documentId={educator._id}
                showUrl={`/educators/profile/${educator._id}`}
                editUrl={`/educators/profile/${educator._id}`}
                title={educator.firstName + " " + educator.lastName}
                body={educator.aboutMe}
                photo={educator.profilePhotoUrl}
                approvalFunction={this.onEducatorApprovalButtonClick}
                denialFunction={this.onEducatorDenialButtonClick}
                deleteFunction={this.onEducatorDeleteButtonClick}
                documentStatus={educator.educatorStatus}
                document={educator}
                index={index}
              />
            );
          })};
        </div>
      </>
    );
  }
}

export default AdminTeachers;

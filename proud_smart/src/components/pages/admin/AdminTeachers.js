import React, { Component } from "react";
import RectangularCard from "./../../cards/RectangularCard";
import LocalAPI from "./../../../apis/Local";

class AdminTeachers extends Component {
  state = {
    educators: null
  }

  onApprovalButtonClick = (educator, index) => {
    const {educators} = this.state;
    LocalAPI.put("/admin/approve-application", {type: "user", document: educator})
      .then(response => {
        educators[`${index}`] = response.data;
        this.setState({educators});
      })
      .catch(err => console.log(err))
  }

  onDenialButtonClick = (educator, index) => {
    const {educators} = this.state;
    LocalAPI.put("/admin/deny-application", {type: "user", document: educator})
      .then(response => {
        console.log(response);
        educators[`${index}`] = response.data;
        this.setState({educators});
      })
      .catch(err => console.log(err))
  }

  componentDidMount = async () => {
    LocalAPI("/educators")
      .then(response => this.setState({educators: response.data}))
  };
  
  render() {
    const {educators} = this.state;
    console.log(educators);
    return (
      <>
        <h1>This is the AdminTeachers</h1>
        {educators && educators.map((educator, index) => {
          return (
            <>
              <h3>{educator.firstName + " " + educator.lastName}</h3>
              <div>
                {educator.educatorStatus === "applied" && (
                  <>
                    <button onClick={() => this.onApprovalButtonClick(educator, index)}>Approve</button> 
                    <button onClick={() => this.onDenialButtonClick(educator, index)}>Deny</button>
                  </>
                  ) 
                }
              </div>
            </>
          )})
        }
        <div className="container section">
          <RectangularCard />
        </div>
      </>
    );
  }
}

export default AdminTeachers;

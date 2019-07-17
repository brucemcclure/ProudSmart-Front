import React, { Component } from "react";
import { CardElement, injectStripe } from "react-stripe-elements";
import LocalAPI from "./../../apis/Local";
import {connect} from "react-redux";

class CheckoutForm extends Component {
  constructor(props) {
    super(props);
    this.state = { complete: false };
    this.submit = this.submit.bind(this);
  }

  async submit(ev) {
    // User clicked submit
    let { token } = await this.props.stripe.createToken({ 
      name: "name",

      
     });
    console.log(token);
    let response = await LocalAPI.post("/payments/charge", {
      //   headers: { "Content-Type": "text/plain" },
      token: token,

      // the metadata is used to adjust the database with the payment information
      // the values below have been hardcoded but will need to be updated with the values of course being purchased 
      metadata: {
        amount: 20000, // insert the amount to charge the customer REMEMBER THIS IS IN CENTS!!!!!
        userId: "ankjfdkj", // insert the id of the user who purchased the course
        purchasedCourse: {
          courseId: "abcd", // insert the id of the course they purchased
          courseTitle: "spanking", // insert the title of the course
          courseProfileUrl: "www.goodtimes.com", // insert the profile photo url
          description: "don't be naughty" // insert the course description
        }

      }
    });
    console.log(response);
    if (response.status === 200) this.setState({ complete: true });
  }

  render() {
    if (this.state.complete) return <h1>Purchase Complete</h1>;

    return (
      <div className="checkout">
        <p>Would you like to complete the purchase?</p>
        <CardElement />
        <button onClick={this.submit}>Send</button>
      </div>
    );
  }
}

export default injectStripe(CheckoutForm);

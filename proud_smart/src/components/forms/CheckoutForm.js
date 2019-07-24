import React, { Component } from "react";
import { CardElement, injectStripe } from "react-stripe-elements";
import LocalAPI from "./../../apis/Local";
import { connect } from "react-redux";

class CheckoutForm extends Component {
  constructor(props) {
    super(props);
    this.state = { complete: false };
    this.submit = this.submit.bind(this);
  }

  async submit(ev) {
    // User clicked submit
    let { token } = await this.props.stripe.createToken({
      name: "name"
    });

    const {
      price,
      _id,
      title,
      courseProfilePictureUrl,
      description
    } = this.props.course;
    let response = await LocalAPI.post("/payments/charge", {
      //   headers: { "Content-Type": "text/plain" },
      token: token,

      // the metadata is used to adjust the database with the payment information
      // the values below have been hardcoded but will need to be updated with the values of course being purchased
      metadata: {
        amount: price * 100, // insert the amount to charge the customer REMEMBER THIS IS IN CENTS!!!!!
        purchasedCourse: {
          courseId: _id, // insert the id of the course they purchased
          title: title, // insert the title of the course
          courseProfilePictureUrl: courseProfilePictureUrl, // insert the profile photo url
          description: description // insert the course description
        }
      }
    });
    console.log(response);
    if (response.status === 200) this.setState({ complete: true });
  }

  componentDidMount = () => {
    console.log("^^^^^");
    console.log(this.props);
    console.log("^^^^^");
  };

  render() {
    if (this.state.complete) return <h1>Purchase Complete</h1>;
    // const {course} = this.props.location.state;
    // console.log(".............");
    // console.log(course);

    return (
      <div className="checkout">
        <p>Would you like to complete the purchase?</p>
        <div className="container section">
          <CardElement />
        </div>
        <button onClick={this.submit}>Send</button>
      </div>
    );
  }
}

const mapPropsToState = state => {
  return {
    course: state.course.displayedCourse
  };
};

export default connect(mapPropsToState)(injectStripe(CheckoutForm));

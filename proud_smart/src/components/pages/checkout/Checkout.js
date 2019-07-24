import React, { Component } from "react";
import { Elements, StripeProvider } from "react-stripe-elements";
import CheckoutForm from "./../../forms/CheckoutForm";

class Checkout extends Component {
  render() {
    return (
      <StripeProvider apiKey="pk_test_szYA5f9AcFJP7t1CjYTsFU4q00UIXgQSAR">
        <div className="example">
          <h1>Proudsmart Checkout</h1>
          <Elements>
            <CheckoutForm />
          </Elements>
        </div>
      </StripeProvider>
    );
  }
}

export default Checkout;

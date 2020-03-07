import React from "react";
import StripeCheckOut from "react-stripe-checkout";
import axios from "axios";

const StripeCheckOutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_RYifVU4rmLdMGDInvgUTtGrY00tNiByWGa";

  const onToken = token => {
    axios({
      url: "payment",
      method: "post",
      data: {
        amount: priceForStripe,
        token: token
      }
    })
      .then(res => {
        alert("Payment Successful");
      })
      .catch(error => {
        console.log("Payment error : ", JSON.parse(error));
        alert("Issue with Payment, Please use a provided credit card");
      });
  };

  return (
    <StripeCheckOut
      label="Pay Now"
      name="Crwn Clothing Ltd"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your Total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now "
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckOutButton;

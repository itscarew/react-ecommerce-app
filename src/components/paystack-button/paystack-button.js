import React from "react";
import PaystackButton from "react-paystack";

import "./paystack-button.styles.scss";

const PayStack = ({ price }) => {
  const key = "pk_test_0666e4531f6f0b07e7b19f7b767a4f7d5075e30a"; //PAYSTACK PUBLIC KEY
  const email = "foobar@example.com"; // customer email
  const amount = price * 10000; //equals NGN100,

  const callback = response => {
    console.log(response);
    alert("Payment Successful"); // card charged successfully, get reference here
  };

  const close = () => {
    console.log("Payment closed");
  };

  const getReference = () => {
    //you can put any unique reference implementation code here
    let text = "";
    let possible =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-.=";

    for (let i = 0; i < 15; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
  };

  return (
    <PaystackButton
      text="Pay Now"
      className="pay-button"
      callback={callback}
      close={close}
      disabled={false}
      embed={false}
      reference={getReference()}
      email={email}
      amount={amount}
      paystackkey={key}
      tag="button"
    />
  );
};

export default PayStack;

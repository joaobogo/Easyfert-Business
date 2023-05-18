import React, { useState, useEffect, useContext } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import StripeForm from "./StripeForm";
import { useNavigate } from "react-router-dom";
import "../App.css";
import CartContext from "../context/Cartcontext";
import LoadingContainer from "./styles/Loading.styles";

const stripeId = process.env.REACT_APP_STRIPE;

const stripePromise = loadStripe(stripeId);

export default function Stripe() {
  const [clientSecret, setClientSecret] = useState("");
  const { totalprice, shippingPrice } = useContext(CartContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!totalprice) {
      navigate("/");
    } else {
      // Create PaymentIntent as soon as the page loads
      fetch("https://660tb6651b.execute-api.sa-east-1.amazonaws.com/stripe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: Math.round(100 * (shippingPrice + totalprice)),
        }),
      })
        .then((res) => res.json())
        .then((data) => setClientSecret(data.clientSecret));
    }
  }, []);

  const appearance = {
    theme: "stripe",
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <div className="App">
      {clientSecret ? (
        <Elements options={options} stripe={stripePromise}>
          <StripeForm />
        </Elements>
      ) : (
        <LoadingContainer>
          <div className="spinner"></div>
        </LoadingContainer>
      )}
    </div>
  );
}

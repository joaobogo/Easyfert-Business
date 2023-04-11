import React, { useState, useEffect } from "react";
import { getsum } from "../functions";
import Cartcontext from "./Cartcontext";
import { client } from "../client";

const savedCart = localStorage.getItem("newcart");
console.log(savedCart);
const initialCart = savedCart ? JSON.parse(savedCart) : [];
const id = localStorage.getItem("orderId");
const customerKey = localStorage.getItem("customerKey");

function CartProvider({ children }) {
  const [cart, setCart] = useState(initialCart);
  const [totalprice, setTotalprice] = useState(getsum(initialCart));
  const [globalCep, setGlobalCep] = useState("");
  const [shippings, setShippings] = useState([]);
  const [shippingPrice, setShippingPrice] = useState(0);
  const [orderId, setOrderId] = useState(id);
  const [customerData, setCustomerData] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(!!customerKey);
  const [customerId, setCustomerId] = useState(customerKey);

  useEffect(() => {
    client.fetch('*[_type=="shipping"]').then((prices) => {
      setShippings(prices);
    });
    client.getDocument(customerId).then((res) => setCustomerData(res));
  }, []);

  const setCustomerKey = (key) => {
    localStorage.setItem("customerKey", key);
    setCustomerId(key);
  };

  const globalState = {
    cart,
    setCart,
    totalprice,
    setTotalprice,
    setGlobalCep,
    globalCep,
    shippings,
    setShippings,
    setShippingPrice,
    shippingPrice,
    orderId,
    setOrderId,
    customerData,
    setCustomerData,
    isLoggedIn,
    setIsLoggedIn,
    setCustomerKey,
  };

  return (
    <Cartcontext.Provider value={globalState}>{children}</Cartcontext.Provider>
  );
}

export default CartProvider;

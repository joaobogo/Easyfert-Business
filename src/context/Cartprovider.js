import React, { useState, useEffect } from "react";
import { getsum } from "../functions";
import Cartcontext from "./Cartcontext";
import { client } from "../client";

const savedCart = localStorage.getItem("newcart");
console.log(savedCart);
const initialCart = savedCart ? JSON.parse(savedCart) : [];
const id = localStorage.getItem("orderId");
const customerKey = localStorage.getItem("customerKey");
const savedWishList = localStorage.getItem("newWishList");
const initialWishList = savedWishList ? JSON.parse(savedWishList) : [];

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
  const [sanityprod, setSanityProd] = useState([]);
  const [wishlist, setWishList] = useState(initialWishList);

  useEffect(() => {
    client.fetch('*[_type=="shipping"]').then((prices) => {
      setShippings(prices);
    });
    client.fetch('*[_type=="product"]').then((products) => {
      setSanityProd(products);
    });
    client.getDocument(customerId).then((res) => setCustomerData(res));
  }, []);

  const setCustomerKey = (key) => {
    localStorage.setItem("customerKey", key);
    setCustomerId(key);
  };

const handleWish = (id) => {
setWishList((prevlist)=> {
  const newWishList = [...prevlist,id]
  localStorage.setItem('newWishList',JSON.stringify(newWishList))
  if(customerData._id){
    client.patch(customerData._id).set({wishlist:newWishList}).commit()
  }
  return newWishList
})}

const handleUnWish = (id) =>{
  setWishList((prevlist)=> {
    const newWishList = prevlist.filter((item)=>item !== id)
    localStorage.setItem('newWishList',JSON.stringify(newWishList))
    if(customerData._id){
      client.patch(customerData._id).set({wishlist:newWishList}).commit()
    }
    return newWishList
})}

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
    sanityprod,
    wishlist,
    handleWish,
    handleUnWish,
  };

  return (
    <Cartcontext.Provider value={globalState}>{children}</Cartcontext.Provider>
  );
}

export default CartProvider;

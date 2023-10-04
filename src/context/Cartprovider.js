import React, { useState, useEffect } from "react";
import { getsum, refreshandget } from "../functions";
import Cartcontext from "./Cartcontext";
import { client } from "../client";
import { getBlingProducts } from "../functions";
import { TOKEN_ID } from "../functions/const";




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
  const [sanityprod, setSanityProd] = useState({kits:[],products:[]});
  const [wishlist, setWishList] = useState(initialWishList);
  const [tokenData, setTokenData] = useState({});
const [isLoading, setIsLoading] = useState(true)


  useEffect(() => {
    client.fetch('*[_type=="shipping"]').then((prices) => {
      setShippings(prices);
    });
    client.fetch('*[_type=="token"]').then((token) => {
      console.log(token);
      setTokenData(token[0]);
      const { access_token, refresh_token, expires_in, _id } = token[0];
      if (expires_in <= Date.now()) {
        refreshandget(refresh_token,handleToken, _id).then(setSanityProd)
      }else{
      getBlingProducts({access_token}).then(setSanityProd);
    }
    setIsLoading(false)
    });
    client.getDocument(customerId).then((res) => setCustomerData(res));
  }, []);

  const handleToken = (data) => {
    const { access_token, refresh_token, expires_in } = data;
    console.log(tokenData,data)
    setTokenData(data);
    client
      .patch(TOKEN_ID)
      .set({ access_token, refresh_token, expires_in })
      .commit();
  };

  const setCustomerKey = (key) => {
    localStorage.setItem("customerKey", key);
    setCustomerId(key);
  };

  const handleWish = (id) => {
    setWishList((prevlist) => {
      const newWishList = [...prevlist, id];
      localStorage.setItem("newWishList", JSON.stringify(newWishList));
      if (customerData._id) {
        client.patch(customerData._id).set({ wishlist: newWishList }).commit();
      }
      return newWishList;
    });
  };

  const handleUnWish = (id) => {
    setWishList((prevlist) => {
      const newWishList = prevlist.filter((item) => item !== id);
      localStorage.setItem("newWishList", JSON.stringify(newWishList));
      if (customerData._id) {
        client.patch(customerData._id).set({ wishlist: newWishList }).commit();
      }
      return newWishList;
    });
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
    sanityprod,
    wishlist,
    handleWish,
    handleUnWish,
    tokenData,
    setTokenData,
    handleToken,
    isLoading,
    setIsLoading,
  };

  return (
    <Cartcontext.Provider value={globalState}>{children}</Cartcontext.Provider>
  );
}

export default CartProvider;

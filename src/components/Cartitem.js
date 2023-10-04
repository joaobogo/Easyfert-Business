import React, { useContext, useEffect, useState } from "react";
import CartContext from "../context/Cartcontext";
import { formatCurrency, saveToCart, getBlingProducts } from "../functions";
import CartItemsContainer from "./styles/CartItems.styles";
import Loading from "./Loading";

function Cartitem({ item }) {
  const [data, setData] = useState(null);
  const { setCart, setTotalprice, totalprice, cart, tokenData, handleToken } =
    useContext(CartContext);
  const [quantity, setQuantity] = useState(item.quantity);
  const [images, setImages] = useState([]);

  useEffect(() => {
    if (!tokenData.expires_in) return;
    getBlingProducts(tokenData, handleToken).then((data) => {
      const productData = data.products.find(({ _id }) => _id === item._id);
      setData(productData);
      client.fetch('*[_type=="product"]').then((products) => {
        let item = products.find((item) => item.title === productData.title);
        if (item && item.image) {
          setImages(item.image);
        }
      });
    });
  }, [tokenData]);

  const decrease = () => {
    setQuantity((prevquantity) => {
      const updatedProducts = cart.map((element) => {
        if (element.id != item.id) {
          return element;
        } else {
          return {
            id: item.id,
            quantity: prevquantity - 1,
            price: item.price,
            _id: item._id,
          };
        }
      });
      setCart(updatedProducts);
      setTotalprice((prevprice) => totalprice - item.price);
      return prevquantity - 1;
    });
  };

  const increase = () => {
    setQuantity((prevquantity) => {
      const newquantity = Number(prevquantity) + 1;
      const updatedProducts = cart.map((element) => {
        if (element.id != item.id) {
          return element;
        } else {
          return {
            id: item.id,
            quantity: newquantity,
            price: item.price,
            _id: item._id,
          };
        }
      });
      setCart(updatedProducts);
      setTotalprice((prevprice) => totalprice + item.price);
      return newquantity;
    });
  };

  const handleDelete = () => {
    setQuantity((prevquantity) => {
      const updatedProducts = cart.filter((element) => element.id != item.id);
      setCart(updatedProducts);
      setTotalprice((prevprice) => totalprice - item.price * prevquantity);
      saveToCart(updatedProducts);
      return 0;
    });
  };

  return (
    <>
      {data ? (
        <CartItemsContainer>
          {images.length ? <img src={urlFor(images[0])}></img> : null}
          <p>{data.title}</p>
          <p>{formatCurrency(data.price * quantity)}</p>

          <button onClick={decrease} disabled={quantity <= 0}>
            -
          </button>
          <span>{quantity}</span>
          <button onClick={increase} disabled={quantity === data.quantity}>
            +
          </button>
          <button className="delete" onClick={handleDelete}>
            X
          </button>
        </CartItemsContainer>
      ) : (
        <Loading/>
      )}
    </>
  );
}

export default Cartitem;

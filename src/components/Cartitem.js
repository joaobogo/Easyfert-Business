import React, { useContext, useEffect, useState } from "react";
import { client } from "../client";
import { urlFor } from "../client";
import CartContext from "../context/Cartcontext";
import { formatCurrency, saveToCart } from "../functions";
import CartItemsContainer from "./styles/CartItems.styles";

function Cartitem({ item }) {
  const [data, setData] = useState(null);
  const { setCart, setTotalprice, totalprice, cart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(item.quantity);

  useEffect(() => {
    getById(item._id).then((product) => setData(product));
  }, []);

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
      const updatedProducts = cart.map((element) => {
        if (element.id != item.id) {
          return element;
        } else {
          return {
            id: item.id,
            quantity: prevquantity + 1,
            price: item.price,
            _id: item._id,
          };
        }
      });
      setCart(updatedProducts);
      setTotalprice((prevprice) => totalprice + item.price);
      return prevquantity + 1;
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
          <img src={urlFor(data.image[0])}></img>
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
        <span>Carregando...</span>
      )}
    </>
  );
}

const getById = async (id) => {
  const product = await client.getDocument(id);
  return product;
};
export default Cartitem;

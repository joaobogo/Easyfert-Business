import React, { useContext, useEffect, useState } from "react";
import { client } from "../client";
import { urlFor } from "../client";
import CartContext from "../context/Cartcontext";
import { formatCurrency, saveToCart } from "../functions";
import CartItemsContainer from "./styles/CartItems.styles";
import WishListContainer from "./styles/WishList.styles";

function FavoritesCart({ id }) {
  const [data, setData] = useState(null);
  const { setCart, setTotalprice, totalprice, cart, handleWish, handleUnWish } =
    useContext(CartContext);

  useEffect(() => {
    getById(id).then((product) => setData(product));
  }, []);

  const handleClick = () => {
    handleUnWish(id);
    setCart((prevcart) => {
      const newcart = [
        ...prevcart,
        {
          id: id,
          quantity: 1,
          price: data.price,
          _id: id,
        },
      ];
      localStorage.setItem("newcart", JSON.stringify(newcart));
      return newcart;
    });
  };
  return (
    <>
     
      {data ? (
        <CartItemsContainer>
          <img src={urlFor(data.image[0])}></img>
          <p>{data.title}</p>
          <p>{formatCurrency(data.price)}</p>
          <button className="addbutton" onClick={handleClick}>
            Adicionar ao Carrinho
          </button>
          <button className="delete" onClick={() => handleUnWish(id)}>
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
export default FavoritesCart;

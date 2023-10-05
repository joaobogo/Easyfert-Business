import React, { useContext, useEffect, useState } from "react";
import { client } from "../client";
import { urlFor } from "../client";
import CartContext from "../context/Cartcontext";
import { formatCurrency, getBlingProducts, saveToCart } from "../functions";
import CartItemsContainer from "./styles/CartItems.styles";
import WishListContainer from "./styles/WishList.styles";
import Loading from "./Loading";

function FavoritesCart({ id }) {
  const [data, setData] = useState(null);
  const {
    setCart,
    setTotalprice,
    totalprice,
    cart,
    handleWish,
    handleUnWish,
    handleToken,
    tokenData,
  } = useContext(CartContext);
  const [images, setImages] = useState([]);

  useEffect(() => {
    if (!tokenData.expires_in) return;
    getBlingProducts(tokenData, handleToken).then((data) => {
      const productData = data.products.find(({ _id }) => _id === id);
      setData(productData);
      client.fetch('*[_type=="product"]').then((products) => {
        let item = products.find((item) => item.title === productData.title);
        if (item && item.image) {
          setImages(item.image);
        }
      });
    });
  }, [tokenData]);

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

  const isDisabled = (cart, id) => {
    return cart.some((item) => {
      if (item.id === id) {
        return true;
      } else {
        return false;
      }
    });
  };

  return (
    <>
      {data ? (
        <CartItemsContainer>
          {images.length ? <img src={urlFor(images[0])}></img> : null}
          <p>{data.title}</p>
          <p>{formatCurrency(data.price)}</p>
          <button
            disabled={isDisabled(cart, data.id)}
            className="addbutton"
            onClick={handleClick}
          >
            Adicionar ao Carrinho
          </button>
          <button className="delete" onClick={() => handleUnWish(id)}>
            X
          </button>
        </CartItemsContainer>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default FavoritesCart;

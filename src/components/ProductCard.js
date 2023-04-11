import React, { useContext, useState } from "react";
import { urlFor } from "../client";
import CartContext from "../context/Cartcontext";
import ProductCardContainer from "./styles/ProductCard.styles";
import { Link } from "react-router-dom";
import { formatCurrency } from "../functions";

function ProductCard({ product }) {
  const { setCart, cart } = useContext(CartContext);

  const handleClick = () => {
    setCart((prevcart) => {
      const newcart = [
        ...prevcart,
        {
          id: product._id,
          quantity: 1,
          price: product.price,
          _id: product._id,
        },
      ];
      localStorage.setItem("newcart", JSON.stringify(newcart));
      return newcart;
    });
  };

  return (
    <ProductCardContainer>
      <Link to={`product/${product._id}`}>
        {product.image && product.image.length && (
          <img src={urlFor(product.image[0])}></img>
        )}

        <h3>{product.title}</h3>
        <p>{formatCurrency(product.price)}</p>
      </Link>

      {cart.some((item) => item.id === product._id) ? (
        <span> Produto já adicionado ao carrinho</span>
      ) : (
        <div className="buttoncontainer">
          <button className="buybutton" onClick={handleClick}>
            Adicionar ao Carrinho
          </button>
          <button className="detailsbutton">Detalhes do Produto</button>
        </div>
      )}
    </ProductCardContainer>
  );
}

export default ProductCard;

import React, { useContext, useEffect, useState } from "react";
import CartContext from "../context/Cartcontext";
import Cartitem from "../components/Cartitem";
import { client } from "../client";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { formatCurrency, handlePac, handleSedex } from "../functions";
import ShoppingCartContainer from "../components/styles/ShoppingCart.styles";
import Header from "../components/Header";
import Lowfooter from "../components/Lowfooter";
import Footer from "../components/Footer";
import FavoriteItem from "../components/FavoriteItem";



const ShoppingCart = () => {
  const { cart, totalprice, setGlobalCep, shippings,wishlist } = useContext(CartContext);
  const navigate = useNavigate();
  const [cep, setCep] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [buttontext, setButtontext] = useState("Confirmar a Compra");
  const [price, setPrice] = useState("");

  const decreaseStock = () => {
    cart.forEach((element) => {
      client.patch(element._id).dec({ quantity: element.quantity }).commit();
    });
    navigate("form");
  };
  
  const handleCep = (e) => {
    setCep(e.target.value);
    if (e.target.value.length >= 8) {
      axios
        .get(`https://viacep.com.br/ws/${e.target.value}/json`)
        .then(({ data }) => {
          setCep(data.cep);
          setCity(data.localidade);
          setState(data.uf);
          setGlobalCep(data.cep);
        });
    }
  };

  const handleShipping = (type) => {
    if (type === "PAC") {
      const pacprice = handlePac(state, city, shippings,cart);
      setPrice(pacprice);
    } else {
      const sedexprice = handleSedex(state, city, shippings,cart);
      setPrice(sedexprice);
    }
  };

  return (
    <>
      <Header />
      <ShoppingCartContainer>
        
          <h1>Meus Favoritos</h1>
          {wishlist.map((id) => (
            <FavoriteItem key={id} id={id}/>
          ))}
        

        <h1>Detalhes do Pedido</h1>

        {cart.map((item) => (
          <Cartitem key={item.id} item={item} />
        ))}
        <p>Total: {formatCurrency(totalprice.toFixed(2))}</p>

        <div className="buttons">
          <button disabled={!state} onClick={()=> handleShipping('PIX')}>
            Calcular Frete - PAC
          </button>
          <button disabled={!state} onClick={()=> handleShipping('Sedex')}>
            Calcular Frete - Sedex
          </button>
          <input placeholder="CEP" value={cep} onChange={handleCep}></input>
          <p>
            Valor Estimado do Frete:{" "}
            {price ? formatCurrency(price) : "Não Calculado"}
          </p>
        </div>

        <p>
          Total + Frete:{" "}
          {formatCurrency((totalprice + Number(price)).toFixed(2))}
        </p>
        <button className="buybutton" onClick={decreaseStock}>
          {buttontext}
        </button>
      </ShoppingCartContainer>
      <Footer />
      <Lowfooter />
    </>
  );
};

export default ShoppingCart;

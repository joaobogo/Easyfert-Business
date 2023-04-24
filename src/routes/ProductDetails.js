import React, { useState, useEffect, useContext } from "react";
import CartContext from "../context/Cartcontext";
import { useParams } from "react-router-dom";
import { client, urlFor } from "../client";
import Header from "../components/Header";
import Lowfooter from "../components/Lowfooter";
import Footer from "../components/Footer";
import ProductDetailsContainer from "../components/styles/ProductDetails.styles";
import { formatCurrency, handlePac, handleSedex } from "../functions";
import axios from "axios";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [imgIndex, setImgIndex] = useState(0);
  const { setCart, cart, totalprice, setGlobalCep, shippings } =
    useContext(CartContext);
  const [price, setPrice] = useState("");
  const [cep, setCep] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");

  const handleAdd = () => {
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

  useEffect(() => {
    getById(id).then((product) => setProduct(product));
  }, []);

  const setPrevImg = () => {
    setImgIndex((prevIndex) => {
      if (prevIndex === 0) {
        return product.image.length - 1;
      } else {
        return prevIndex - 1;
      }
    });
  };

  const setNextImg = () => {
    setImgIndex((prevIndex) => {
      if (prevIndex === product.image.length - 1) {
        return 0;
      } else {
        return prevIndex + 1;
      }
    });
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

      <ProductDetailsContainer>
        {product ? (
          <section>
            <div className="leftmenu">
              <button className="arrows" onClick={setPrevImg}>
                {"<"}
              </button>
              <img src={urlFor(product.image[imgIndex])}></img>
              <button className="arrows" onClick={setNextImg}>
                {">"}
              </button>
            </div>

            <div className="rightmenu">
              <h2>{product.title}</h2>
              <p className="pricetag">{formatCurrency(product.price)}</p>
              <p className="description">{product.description}</p>

              {cart.some((item) => item.id === product._id) ? (
                <p className="addedprod"> Produto já adicionado ao carrinho</p>
              ) : (
                <div>
                  <button className="buybutton" onClick={handleAdd}>
                    Adicionar ao Carrinho
                  </button>
                </div>
              )}

              <div className="shippingcontainer">
                <div className="buttoncontainer">
                  <button
                    className="shippingbutton"
                    disabled={!state}
                    onClick={() => handleShipping("PAC")}
                  >
                    Calcular Frete - PAC
                  </button>
                  <button
                    className="shippingbutton"
                    disabled={!state}
                    onClick={() => handleShipping("Sedex")}
                  >
                    Calcular Frete - Sedex
                  </button>
                </div>
                <div className="shippinginput">
                  <input
                    placeholder="CEP"
                    value={cep}
                    onChange={handleCep}
                  ></input>
                </div>
                <p className="fretep">
                  Valor Estimado do Frete:{" "}
                  {price ? formatCurrency(price) : "Não Calculado"}
                </p>
              </div>
            </div>
          </section>
        ) : (
          <span> Carregando ....</span>
        )}
      </ProductDetailsContainer>

      <Footer />
      <Lowfooter />
    </>
  );
}
const getById = async (id) => {
  const product = await client.getDocument(id);
  return product;
};

export default ProductDetails;

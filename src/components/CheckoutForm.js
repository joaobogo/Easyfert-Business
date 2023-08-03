import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import CartContext from "../context/Cartcontext";
import { client } from "../client";
import { formatCurrency, translate } from "../functions/index";
import CheckoutContainer from "./styles/CheckoutForm.styles";
import Header from "./Header";
import Footer from "./Footer";
import Lowfooter from "./Lowfooter";
import { Link } from "react-router-dom";
import pix from "../assets/pix.png";
import cc from "../assets/visamaster.png";
import sedex from "../assets/sedex.png";
import pac from "../assets/pac.png";
import { useNavigate } from "react-router-dom";
import api from "../functions/api";
import { handlePac, handleSedex, updateBling } from "../functions/index";

function CheckoutForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");
  const [payment, setPayment] = useState(null);
  const [link, setLink] = useState("");
  const {
    totalprice,
    cart,
    globalCep,
    shippings,
    setShippingPrice,
    orderId,
    setOrderId,
    customerData,
    handleToken,
    tokenData,
  } = useContext(CartContext);
  const [lastName, setLastName] = useState("");
  const [cep, setCEP] = useState(globalCep);
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [address, setAddress] = useState("");
  const [extra, setExtra] = useState("");
  const [number, setNumber] = useState("");
  const [phonenumber, setPhoneNumber] = useState("");
  const [mailingtype, setMailingType] = useState("");
  const [paymentid, setPaymentId] = useState("");
  const [paymentstatus, setPaymentStatus] = useState("");
  const [price, setPrice] = useState("");
  const [paymentType, setPaymentType] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (globalCep) {
      axios
        .get(`https://viacep.com.br/ws/${globalCep}/json`)
        .then(({ data }) => {
          setCEP(data.cep);
          setCity(data.localidade);
          setState(data.uf);
          setAddress(data.logradouro);
        });
    }
  }, []);

  const handlePayment = (e) => {
    setPaymentType(e.target.value);
  };

  const updateCustomer = (orderKey) => {
    const neworders = [...customerData.orders, orderKey];
    client.patch(customerData._id).set({ orders: neworders }).commit();
  };

  const createOrder = (order, paymenturl) => {
    client.create(order).then((orderinfo) => {
      setOrderId(orderinfo._id);
      updateCustomer(orderinfo._id);
      localStorage.setItem("orderId", orderinfo._id);
      // if (paymenturl) {
      //   window.location.href = paymenturl;
      // }
    });
    updateBling(order.products, tokenData, handleToken);
  };

  const postPayment = (body) => {
    api
      .post("v1/payments", body)
      .then((res) => {
        setPayment(JSON.stringify(res));
        setPaymentId(res.data.id);
        const paymenturl =
          res.data.point_of_interaction.transaction_data.ticket_url;
        setLink(paymenturl);
        const order = {
          _type: "order",
          products: cart.map((item) => `${item.id}_${item.quantity}`),
          address: `cep:${cep}, rua:${address}, numero:${number}, complemento:${extra}, ${city}-${state}`,
          personal_data: `nome:${name} ${lastName}, email:${email}, telefone:${phonenumber}`,
          mailing_type: mailingtype,
          total_price: totalprice + price,
          payment_status: "Pendente",
          payment_id: paymentid,
          payment_type: paymentType,
          id: Date.now(),
        };
        createOrder(order, paymenturl);
      })
      .catch(console.log);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setShippingPrice(price);
    const body = {
      transaction_amount: totalprice + price,
      description: "Easyfert",
      payment_method_id: "pix",
      payer: {
        email: email,
        first_name: name,
        last_name: lastName,
        identification: { type: "CPF", number: cpf },
      },
      notification_url: "https://eorpjcvcjvhqnq6.m.pipedream.net",
    };
    if (paymentType === "PIX") {
      postPayment(body);
    } else {
      const order = {
        _type: "order",
        products: cart.map((item) => `${item.id}_${item.quantity}`),
        address: `cep:${cep}, rua:${address}, numero:${number}, complemento:${extra}, ${city}-${state}`,
        personal_data: `nome:${name} ${lastName}, email:${email}, telefone:${phonenumber}`,
        mailing_type: mailingtype,
        total_price: totalprice + price,
        payment_status: "Pendente",
        payment_id: "",
        payment_type: paymentType,
        id: Date.now(),
      };
      const blingOrder = {
        cart,
        address: {
          address,
          number,
          city,
          extra,
          state,
          neighborhood,
        },
        contact: {
          name: `${name} ${lastName}`,
        },
      };
      createOrder(order);

      // navigate("/creditcard");
    }
  };

  const handleClick = () => {
    api
      .get(`v1/payments/${paymentid}`)
      .then(({ data }) => setPaymentStatus(translate(data.status)));
  };

  const handleShipping = (value) => {
    setMailingType(value);
    if (city && state) {
      calculateShipping(value);
    }
  };

  const calculateShipping = (type) => {
    if (type === "PAC") {
      const pacprice = handlePac(state, city, shippings, cart);
      setPrice(pacprice);
    } else {
      const sedexprice = handleSedex(state, city, shippings, cart);
      setPrice(sedexprice);
    }
  };

  const handleCep = (e) => {
    setCEP(e.target.value);
    if (e.target.value.length >= 8) {
      axios
        .get(`https://viacep.com.br/ws/${e.target.value}/json`)
        .then(({ data }) => {
          setCEP(data.cep);
          setCity(data.localidade);
          setState(data.uf);
          setAddress(data.logradouro);
        });
    }
  };

  return (
    <>
      <Header />
      <CheckoutContainer>
        <h1>Informações de Pagamento</h1>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <input
              placeholder="Nome *"
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
            ></input>
            <input
              placeholder="Sobrenome *"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              type="text"
            ></input>
          </div>
          <input
            placeholder="Email *"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
          ></input>
          <div className="row">
            <input
              placeholder="(11) 00000-0000 *"
              value={phonenumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              type="tel"
            ></input>
            <input
              placeholder="CPF *"
              value={cpf}
              onChange={(e) => setCpf(e.target.value)}
              type="text"
            ></input>
          </div>
          <div className="row">
            <input
              placeholder="CEP *"
              value={cep}
              onChange={handleCep}
              type="text"
            ></input>
            <input
              placeholder="Endereço *"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              type="text"
            ></input>
          </div>
          <div className="row">
            <input
              placeholder="Cidade *"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              type="text"
            ></input>
            <input
              placeholder="Estado *"
              value={state}
              onChange={(e) => setState(e.target.value)}
              type="text"
            ></input>
          </div>
          <div className="row">
            <input
              placeholder="Número *"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              type="text"
            ></input>
            <input
              placeholder="Complemento"
              value={extra}
              onChange={(e) => setExtra(e.target.value)}
              type="text"
            ></input>
          </div>
          <div className={cep ? "selectrow" : "selectrow disabled"}>
            <p className="enviop">Selecione o tipo de envio:</p>
            <label>
              <input
                disabled={!cep}
                className="selectinput"
                type="radio"
                name="envio"
                value="PAC"
                checked={mailingtype === "PAC"}
                onChange={(e) => handleShipping(e.target.value)}
              />
              <img src={pac} />
            </label>
            <label>
              <input
                disabled={!cep}
                className="selectinput"
                type="radio"
                name="envio"
                value="Sedex"
                checked={mailingtype === "Sedex"}
                onChange={(e) => handleShipping(e.target.value)}
              />
              <img src={sedex} />
            </label>
          </div>
          <div className="selectrow">
            <p>Selecione o tipo de Pagamento:</p>
            <label>
              <input
                className="selectinput"
                type="radio"
                name="payment"
                value="PIX"
                checked={paymentType === "PIX"}
                onChange={(e) => setPaymentType(e.target.value)}
              />
              <img src={pix} />
            </label>
            <label>
              <input
                className="selectinput"
                type="radio"
                name="payment"
                value="Cartão de Crédito"
                checked={paymentType === "Cartão de Crédito"}
                onChange={(e) => setPaymentType(e.target.value)}
              />
              <img src={cc} />
            </label>
          </div>
          <p>Valor Estimado do Frete: {formatCurrency(price)}</p>
          <p>
            Preço total da compra:{" "}
            {formatCurrency((totalprice + Number(price)).toFixed(2))}
          </p>
          <div className="row">
            <button
              type="submit"
              disabled={
                !name || !email || !cpf || !cep || !number || !mailingtype
              }
            >
              Finalizar Compra
            </button>
            {/* {link && <a href={link}>Pagar com Pix</a>}
            {link && <Link to="/creditcard">Pagar com Cartão de Crédito</Link>} */}
          </div>
        </form>
        {/* 
        <div className="row">
          <button onClick={handleClick}>Verificar Status do Pagamento</button>
          <p className="pstatus">{paymentstatus}</p>
        </div> */}
      </CheckoutContainer>
      <Footer />
      <Lowfooter />
    </>
  );
}

export default CheckoutForm;

import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import CartContext from "../context/Cartcontext";
import { client } from "../client";
import CheckoutContainer from "../components/styles/CheckoutForm.styles";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Lowfooter from "../components/Lowfooter";
import { Link, useNavigate } from "react-router-dom";
import CryptoJS from "crypto-js";



const key = process.env.REACT_APP_CRYPTO;

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [email2, setEmail2] = useState("");
  const { totalprice, globalCep, setCustomerData, setIsLoggedIn } =
    useContext(CartContext);
  const [lastName, setLastName] = useState("");
  const [cep, setCEP] = useState(globalCep);
  const [cpf,setCPF] = useState("")
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [address, setAddress] = useState("");
  const [extra, setExtra] = useState("");
  const [number, setNumber] = useState("");
  const [phonenumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [response, setResponse] = useState("");
  const [response2, setResponse2] = useState("");
  const [isLoading, setIsLoading] = useState(false)
  const [birthday, setBirthday] = useState("");
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

  const createCustomer = (customer) => {
    setResponse("");
    client.fetch('*[_type=="customer"]').then((customers) => {
      const existinguser = customers.find((user) => user.email === email);
      if (existinguser) {
        setResponse("Já existe um cadastro com esse email");
        setIsLoading(false)
      } else {
        client.create(customer).then((customerinfo) => {
          setCustomerData(customerinfo);
          localStorage.setItem("customerKey", customerinfo._id);
          setIsLoggedIn(true);
          setIsLoading(false)
          navigate("/checkout/form");
        });
      }
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password === password2 && email === email2) {
      setResponse("");
      setResponse2("");
      setIsLoading(true);
      const encrypted = CryptoJS.HmacSHA1(password, key).toString();
      const customer = {
        _type: "customer",
        name: `${name} ${lastName}`,
        email: email,
        address: `cep:${cep}, rua:${address}, numero:${number}, complemento:${extra}, ${city}-${state}`,
        orders: [],
        password: encrypted,
        phone_number: phonenumber,
        cpf:cpf,
        birthday:birthday,
      };
      createCustomer(customer);
    } else {
      setResponse("As senhas não são iguais");
    }
    if(email != email2){
      setResponse2("Os emails não são iguais");
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
        <h1>Cadastro</h1>
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
          className="emailinput"
            placeholder="Email *"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
          ></input>
          <input
          className="emailinput"
            placeholder="Confirmar Email *"
            value={email2}
            onChange={(e) => setEmail2(e.target.value)}
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
              placeholder="CEP *"
              value={cep}
              onChange={handleCep}
              type="text"
            ></input>
          </div>
          <div className="row">
            <input
              placeholder="Data de Nascimento *"
              value={birthday}
              onChange={(e) => setBirthday(e.target.value)}
              type="tel"
            ></input>
            <input
              placeholder="CPF *"
              value={cpf}
              onChange={(e)=>setCPF(e.target.value)}
              type="text"
            ></input>
          </div>
          <div className="row">
            <input
              placeholder="Endereço *"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              type="text"
            ></input>
            <input
              placeholder="Número *"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
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
              placeholder="Senha *"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
            ></input>
            <input
              placeholder="Confirmar a Senha *"
              value={password2}
              onChange={(e) => setPassword2(e.target.value)}
              type="password"
            ></input>
          </div>

          <div className="row">
            <button
              type="submit"
              disabled={
                !name || !email || !cep || !number || !password || !password2
              }
            >
           { isLoading ? 'Carregando...' : "Finalizar Cadastro"}
            </button>
          </div>
        </form>
        <p>{response}</p>
        <p>{response2}</p>

      </CheckoutContainer>
      <Footer />
      <Lowfooter />
    </>
  );
}

export default SignUp;

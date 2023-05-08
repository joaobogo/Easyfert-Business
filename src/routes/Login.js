import React, { useContext, useState } from "react";
import Cryptojs from "crypto-js";
import { client } from "../client";
import LoginContainer from "../components/styles/Login.styles";
import CartContext from "../context/Cartcontext";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import LowFooter from "../components/Lowfooter";

const key = process.env.REACT_APP_CRYPTO;

function Login({ children }) {
  const { customerData, setCustomerData, isLoggedIn, setIsLoggedIn, setCustomerKey } =
    useContext(CartContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [response, setResponse] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const encrypted = Cryptojs.HmacSHA1(password, key).toString();
    client.fetch('*[_type=="customer"]').then((customers) => {
      const existinguser = customers.find(
        (user) => user.email === email && user.password === encrypted
      );
      if (existinguser) {
        setCustomerData({
          name: existinguser.name,
          email: existinguser.email,
          address: existinguser.address,
          orders: existinguser.orders,
          phone_number: existinguser.phone_number,
          _id: existinguser._id,
        });
        setCustomerKey(existinguser._id)
        setIsLoggedIn(true);
      } else {
        setResponse("Login Inválido");
      }
    });
  };

  return (
    <div>
      {isLoggedIn ? (
        children
      ) : (
        <>
          <Header />
          <LoginContainer>
            <form>
              <div className="title">
                <h2>Login</h2>
              </div>
              <p>Email:</p>
              <input
                placeholder="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></input>
              <p>Senha:</p>
              <input
                placeholder="Senha"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></input>
              <button onClick={handleLogin}>Login</button>
              <p className="response">{response}</p>
              <Link to="/signup">Novo aqui? Crie uma conta</Link>
            </form>
          </LoginContainer>
          <Footer />
          <LowFooter />
        </>
      )}
    </div>
  );
}

export default Login;

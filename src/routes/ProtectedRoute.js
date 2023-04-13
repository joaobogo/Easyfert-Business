import React, { useContext, useState } from "react";
import Cryptojs from "crypto-js";
import { client } from "../client";
import Orders from "../components/Orders";
import AdminContext from "../context/Admincontext";
import LoginContainer from "../components/styles/Login.styles";

const key = process.env.REACT_APP_CRYPTO;

function ProtectedRoute({ children }) {
  const { handleLoggedin, isLogged, setUser } = useContext(AdminContext);
  // const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [response, setResponse] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const encrypted = Cryptojs.HmacSHA1(password, key).toString();
    client.fetch('*[_type=="user"]').then((users) => {
      const existinguser = users.find(
        (user) => user.email === email && user.password === encrypted
      );
      if (existinguser) {
        handleLoggedin(true, email);
        setUser(existinguser);
      } else {
        setResponse("Login Inválido");
      }
    });

  };

  return (
    <div>
      {isLogged ? (
        children
      ) : (
        <>
          <LoginContainer>
            <form>
              <h2 className="admintitle">Login de Administrador</h2>
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
              <p>{response}</p>
            </form>
          </LoginContainer>
        </>
      )}
    </div>
  );
}

export default ProtectedRoute;

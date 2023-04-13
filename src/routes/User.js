import React, { useContext, useState } from "react";
import AdminContext from "../context/Admincontext";
import Cryptojs from "crypto-js";
import { client } from "../client";
import UserContainer from "../components/styles/UserContainer.style";

const key = process.env.REACT_APP_CRYPTO;

function User() {
  const [isEditing, setIsEditing] = useState(false);
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const { setUser, user } = useContext(AdminContext);
  const [response, setResponse] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    const encrypted = Cryptojs.HmacSHA1(password, key).toString();
    const newencrypted = Cryptojs.HmacSHA1(newPassword, key).toString();
    if (encrypted === user.password) {
      setUser({ ...user, password: newencrypted });
      setResponse("");
      client
        .patch(user._id)
        .set({ password: newencrypted })
        .commit()
    } else {
      setResponse("Senha Incorreta");
    }
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  return (
    <>
      {user ? (
        <UserContainer>
          <div className="card">
          <p><strong>Email:</strong> {user.email}</p>
          <button onClick={handleEdit}>Editar Senhar</button>
          {isEditing ? (
            <form>
              <input
                placeholder="Senha Atual"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                type="password"
              />
              <input
                placeholder="Nova Senha"
                onChange={(e) => setNewPassword(e.target.value)}
                value={newPassword}
                type="password"
              />
              <button onClick={handleClick}>Confirmar</button>
              <p>{response}</p>
            </form>
          ) : null}
          </div>
        </UserContainer>
      ) : null}
    </>
  );
}

export default User;

import React, { useContext, useEffect, useState } from "react";
import CartContext from "../context/Cartcontext";
import CustomerOrderContainer from "./styles/CustomerOrder.styles";
import UserHeader from "./UserHeader";

function AccountData() {
  const { customerData } = useContext(CartContext);
  const { name, email, address, phone_number, cpf, birthday } = customerData;

  return (
    <div>
      <CustomerOrderContainer>
      <div className="rightbar">
        <h2>Minha Conta</h2>
        <p>
          <strong>Nome:</strong> {name}
        </p>
        <p>
          <strong>Email:</strong> {email}
        </p>
        <p>
          <strong>CPF:</strong> {cpf}
        </p>
        <p>
          <strong>Telefone:</strong> {phone_number}
        </p>
        <p>
          <strong>Data de Nascimento:</strong> {birthday}
        </p>
        <p>
          <strong>Endereço:</strong> {address}
        </p>
      </div>
      </CustomerOrderContainer>
    </div>
  );
}

export default AccountData;

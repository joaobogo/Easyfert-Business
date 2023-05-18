import React, { useContext, useEffect, useState } from "react";
import CartContext from "../context/Cartcontext";
import CustomerOrderContainer from "./styles/CustomerOrder.styles";

function AccountData({ id }) {

  
  return (
    <CustomerOrderContainer>
      <div className="rightbar">
        <h2>Minha Conta</h2>

      </div>
    </CustomerOrderContainer>
  );
}

export default AccountData;
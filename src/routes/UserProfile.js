import { client } from "../client";
import React, { useContext, useEffect, useState } from "react";
import CartContext from "../context/Cartcontext";
import CustomerOrder from "../components/CustomerOrder";

function UserProfile() {
  const [orders, setOrders] = useState([]);
  const {customerData} = useContext(CartContext)


  return (
    <div>
      <div>
        <h1>Meus Pedidos</h1>
      </div>
      {customerData.orders && customerData.orders.map((id)=>{
        return <CustomerOrder key={id} id={id}/>
      })}
    </div>
  );
}


export default UserProfile;

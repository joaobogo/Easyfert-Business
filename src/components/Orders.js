import React, { useState, useEffect } from "react";
import { client } from "../client";
import OrderDetails from "./OrderDetails";
import { Link } from "react-router-dom";
import OrderContainer from "./styles/Order.styles";
import Header from '../components/Header'


function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    getServerSideProps().then((res) => {
      setOrders(res.order);
    });
  }, []);

  return (
    <div>
<Header/>
    <OrderContainer>
      <div className="leftbar">
        <div className="button2">
          <Link to="/">Página Inicial</Link>
        </div>
        <div className="button2">
          <Link to="user">Configurações de Usuário</Link>
        </div>
      </div>
      <div className="orderdetails">
        {orders.map((order) => (
          <OrderDetails key={order.id} order={order} />
        ))}
      </div>
    </OrderContainer>
    </div>
  );
}

const getServerSideProps = async () => {
  const order = await client.fetch('*[_type=="order"]');
  return {
    order,
  };
};

export default Orders;

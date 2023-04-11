import React, { useContext, useEffect, useState } from "react";
import { translate } from "../functions";
import OrderDetailsContainer from "./styles/OrderDetailsContainer.styles";
import api from "../functions/api";
import { client } from "../client";
import AdminContext from "../context/Admincontext";

function CustomerOrder({ id }) {
  const [status, setStatus] = useState("");
  const [order, setOrder] = useState({});
  const { sanityprod } = useContext(AdminContext);
  const [products, setProducts] = useState(null);

  useEffect(() => {
    if (sanityprod.length > 0 && order.products) {
      const items = order.products.map((prod) => {
        const [id, quantity] = prod.split("_");
        const name = sanityprod.find((product) => {
          return product._id === id;
        }).title;
        return { id, quantity, name };
      });
      setProducts(items);
    }
  }, [sanityprod,order]);

  useEffect(() => {
    client.getDocument(id).then((orderdata) => {
      setOrder(orderdata);
      console.log(orderdata);
    });
  }, []);

  useEffect(() => {
    if (order.payment_type && order.payment_type.includes("PIX") && order.payment_id) {
      api.get(`v1/payments/${order.payment_id}`).then((res) => {
        setStatus(res.data.status);
      });
    } else 
      // order.payment_type &&
      // order.payment_type.includes("Cartão de Crédito")
     {
      setStatus(order.payment_status);
    }
  }, [order]);

  return (
    <OrderDetailsContainer>
      <div className="rightbar">
        <h2>Pedidos Realizados:</h2>
        <p>Produtos:</p>
        {products &&
         products.map((item) => (
            <div key={item.id}>
              <p>{item.name}</p>
              <p>{item.quantity}</p>
            </div>
          ))}
        <p>Tipo do Envio: {order.mailing_type}</p>
        <p>Preço: {order.total_price} </p>
        <p>Status do Pagamento: {translate(status)}</p>
        <p>Status do Envio: {order.mailing_status || "Preparando Envio"}</p>
      </div>
    </OrderDetailsContainer>
  );
}

export default CustomerOrder;

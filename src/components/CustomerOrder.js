import React, { useContext, useEffect, useState } from "react";
import { getTotalSum, saveToCart, translate } from "../functions";
import OrderDetailsContainer from "./styles/OrderDetailsContainer.styles";
import api from "../functions/api";
import { client } from "../client";
import CartContext from "../context/Cartcontext";
import CustomerOrderContainer from "./styles/CustomerOrder.styles";

function CustomerOrder({ id }) {
  const [status, setStatus] = useState("");
  const [order, setOrder] = useState({});
  const { sanityprod, setCart, cart, setTotalprice } = useContext(CartContext);
  const [products, setProducts] = useState(null);

  useEffect(() => {
    if (sanityprod.length > 0 && order.products) {
      const items = order.products.map((prod) => {
        const [id, quantity] = prod.split("_");
        console.log(id);
        const { title, price } = sanityprod.find((product) => {
          return product._id === id;
        });
        return { id, quantity, name: title, price };
      });
      setProducts(items);
    }
  }, [order, sanityprod]);

  useEffect(() => {
    client.getDocument(id).then((orderdata) => {
      setOrder(orderdata);
      console.log(sanityprod);
    });
  }, []);

  useEffect(() => {
    if (
      order.payment_type &&
      order.payment_type.includes("PIX") &&
      order.payment_id
    ) {
      api.get(`v1/payments/${order.payment_id}`).then((res) => {
        setStatus(res.data.status);
      });
    }
    // order.payment_type &&
    // order.payment_type.includes("Cartão de Crédito")
    else {
      setStatus(order.payment_status);
    }
  }, [order]);

  const handleUser = () => {
    console.log(cart)
    const updatedProducts = cart.map((element) => {
      console.log(element)
      const existingProduct = products.find((item) => item.id === element.id);
      console.log(existingProduct)
      if (existingProduct) {
        return {
          id: element.id,
          quantity: existingProduct.quantity,
          price: element.price,
          _id: element._id,
        };
      }
      return element;
    });
    for (let index = 0; index < products.length; index++) {
      const orderProduct = products[index];
      if (cart.every((item) => item.id !== orderProduct.id)) {
        updatedProducts.push({
          id: orderProduct.id,
          quantity: orderProduct.quantity,
          price: orderProduct.price,
          _id: orderProduct.id,
        });
      }
    }
    setCart(updatedProducts);
    setTotalprice(getTotalSum(updatedProducts));
    saveToCart(updatedProducts)
    alert('carrinho atualizado')
  };

  return (
    <CustomerOrderContainer>
      <div className="rightbar">
        <h2>Pedidos Realizados:</h2>
        <p>
          <strong>Produtos:</strong>
        </p>
        {products &&
          products.map((item) => (
            <div key={item.id}>
              <p>{item.name}</p>
              <p>{item.quantity}</p>
            </div>
          ))}
        <p>
          <strong>Tipo do Envio:</strong> {order.mailing_type}
        </p>
        <p>
          <strong>Preço:</strong> {order.total_price}{" "}
        </p>
        <p>
          <strong>Status do Pagamento:</strong> {translate(status)}
        </p>
        <p>
          <strong>Status do Envio:</strong>{" "}
          {order.mailing_status || "Preparando Envio"}
        </p>
        <button onClick={handleUser}>Pedir Novamente</button>
      </div>
    </CustomerOrderContainer>
  );
}

export default CustomerOrder;

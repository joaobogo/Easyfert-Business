import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { client } from "../client";
import CartContext from "../context/Cartcontext";
import Header from "./Header";
import Footer from "./Footer";
import LowFooter from "./Lowfooter";
import ConfirmationPageContainer from "./styles/ConfirmationPage.styles";

function ConfirmationPage() {
  const { orderId } = useContext(CartContext);
  const { id } = useParams();

  useEffect(() => {
    if (orderId === id) {
      client.patch(orderId).set({ payment_status: "Approved" }).commit();
    }
  }, []);

  return (
    <div>
      <Header />
      <ConfirmationPageContainer>
        <h1>Muito Obrigado pela sua compra!</h1>
        <h3>
          A sua compra foi bem sucedida. Em breve seu pedido será enviado. Nós
          da Easyfert agradecemos a sua confiança.
        </h3>
        <h4>
          Ficou alguma dúvida? <a>Entre em Contato Conosco</a>
        </h4>
        <h4>
          <a href="/">Continuar para a página principal</a>
        </h4>
      </ConfirmationPageContainer>
      <Footer />
      <LowFooter />
    </div>
  );
}

export default ConfirmationPage;

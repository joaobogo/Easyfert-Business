import React from "react";
import WhatsApp from "../assets/WhatsApp.jpg";
import WhatsappBtnContainer from "./styles/WhatsappBtn.styles";


function WhatsappBtn() {
  return (
    <WhatsappBtnContainer>
      <a href="https://wa.me/554196078718" className="whatsappbtn">
        <img alt="Whatsapp Logo" src={WhatsApp} />
      </a>
    </WhatsappBtnContainer>
  );
}

export default WhatsappBtn;

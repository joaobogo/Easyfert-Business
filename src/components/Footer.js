import React from "react";
import Column from "./styles/FooterColumn.styled";
import FooterContainer from "./styles/FooterContainer.styled";
import logoimg from "../assets/eflogo.png";
import { FaFacebook, FaInstagram, FaMailBulk, FaPhone } from "react-icons/fa";


function Footer() {
  return (
    <FooterContainer>
      <Column>
        <img alt='Logo Easyfert' src={logoimg}></img>
      </Column>

      <Column>
        <h3>Horários de Atendimento</h3>
        <p>Segunda à Sexta 10h às 18h</p>
        <p>Sábado das 10h às 14h</p>
      </Column>

      <Column>
        <h3>Contatos</h3>
        <p>
          <FaPhone></FaPhone> (41) 3333-3333
        </p>
        <p>
          <FaMailBulk></FaMailBulk> easyfert@easyfertinfo.com
        </p>
        <div className="media">
          <a href="www.facebook.com">
            <FaFacebook></FaFacebook>
          </a>
          <a href="www.instagram.com">
            <FaInstagram></FaInstagram>
          </a>
        </div>
      </Column>
    </FooterContainer>
  );
}

export default Footer;

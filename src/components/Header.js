import React, { useContext } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaShoppingCart,
  FaUser,
  FaSearch,
} from "react-icons/fa";
import Logoimg from "../assets/eflogomini.png";
import UserNavContainer from "./styles/UserNav.styles";
import CartContext from "../context/Cartcontext";

function Header() {
  const { customerData } = useContext(CartContext);

  return (
    <UserNavContainer>
      <div className="leftside">
        <img classname="mainlogo" src={Logoimg} />
        <a className="title2" href="/">
          Easyfert
        </a>
      </div>

      {/* <div className="rightside">
      <FaSearch className="search"/>
        <input placeholder="O que você busca?"></input> */}
        
        <a
          className="icon"
          href="https://instagram.com/easyfert?igshid=NTc4MTIwNjQ2YQ==
        "
        >
          <FaInstagram />
        </a>
        <a className="icon" href="/carrinho">
          <FaShoppingCart />
        </a>
        <a className="icon" href="/usuario">
          <FaUser />
        </a>
      </div>
    </UserNavContainer>
  );
}

export default Header;

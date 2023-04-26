import React, {useContext} from "react";
import {
  FaFacebook,
  FaInstagram,
  FaShoppingCart,
  FaUser,
} from "react-icons/fa";
import Logoimg from "../assets/eflogomini.png";
import UserNavContainer from "./styles/UserNav.styles";
import CartContext from "../context/Cartcontext";

function Header() {
    const { customerData } = useContext(CartContext);

  return (
    <UserNavContainer>
      <div className="leftside">
        <img classname='mainlogo' src={Logoimg} />
        <a className="title2" href="/">
          Easyfert
        </a>
      </div>

      <div className="rightside">
        <a className="icon" href="#">
          <FaFacebook />
        </a>
        <a className="icon" href="#">
          <FaInstagram />
        </a>
        <a className="icon" href="/checkout">
          <FaShoppingCart />
        </a>
        <a className="icon" href="/userprofile">
          <FaUser />
        </a>
      </div>
    </UserNavContainer>
  );
}

export default Header;
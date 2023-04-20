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

function UserHeader() {
    const { customerData } = useContext(CartContext);

  return (
    <UserNavContainer>
      <div className="leftside">
        <img src={Logoimg} />
        <a className="title" href="/">
          Bem-Vindo {customerData.name}
        </a>
      </div>

      <div className="rightside">
        <a href="#">
          <FaFacebook />
        </a>
        <a href="#">
          <FaInstagram />
        </a>
        <a href="/checkout">
          <FaShoppingCart />
        </a>
        <a href="/userprofile">
          <FaUser />
        </a>
      </div>
    </UserNavContainer>
  );
}

export default UserHeader;

import React, { useContext } from "react";
import FavoriteItem from "../components/FavoriteItem";
import CartContext from "../context/Cartcontext";
import UserHeader from "../components/UserHeader";
import UserProfileContainer from "../components/styles/UserProfile.styles";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

function Wishlist() {
  const { wishlist } = useContext(CartContext);

  return (
    <div>
      <UserHeader />
      <UserProfileContainer>
        <div className="leftbar">
          <div className="button2">
            <Link to="/">Página Inicial</Link>
          </div>
          <div className="button2">
            <Link to="/myaccount">Minha Conta</Link>
          </div>
          <div className="button2">
            <Link to="/usuario">Pedidos Realizados</Link>
          </div>
          <div className="button2">
            <Link to="/blog">Notícias Easyfert</Link>
          </div>
          <div className="button2">
            <Link to="/wishlist">Meus Favoritos</Link>
          </div>
        </div>
        <h1 className="wishh1">Lista de Favoritos</h1>
        <div className="orderdetails">
          {wishlist.map((id) => (
            <FavoriteItem key={id} id={id} />
          ))}
        </div>
      </UserProfileContainer>
      <Footer/>
    </div>
  );
}

export default Wishlist;

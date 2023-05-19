import { client } from "../client";
import React, { useContext, useEffect, useState } from "react";
import CartContext from "../context/Cartcontext";
import CustomerOrder from "../components/CustomerOrder";
import UserProfileContainer from "../components/styles/UserProfile.styles";
import { Link } from "react-router-dom";
import UserHeader from "../components/UserHeader";
import AccountData from "../components/AccountData";

function Myaccount() {
  const [orders, setOrders] = useState([]);
  const { customerData } = useContext(CartContext);


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
            <Link to="/userprofile">Pedidos Realizados</Link>
          </div>
          <div className="button2">
            <Link to="/blog">Notícias Easyfert</Link>
          </div>
          <div className="button2">
            <Link to="/wishlist">Meus Favoritos</Link>
          </div>
        </div>


        <div className="orderdetails">
          {/* {customerData &&
            customerData.map((id) => {
              return <AccountData key={id} id={id} />;
            })} */}
        </div>
        
      </UserProfileContainer>
    </div>
  );
}

export default Myaccount;

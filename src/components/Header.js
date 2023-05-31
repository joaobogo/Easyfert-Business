import React, { useContext, useState } from "react";
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
import { client } from "../client";
import { Link } from "react-router-dom";

function Header() {
  const { customerData } = useContext(CartContext);
  const [input, setInput] = useState("");
  const [products, setProducts] = useState([]);

  const searchClick = (e) => {
    e.preventDefault();
    getServerSideProps().then((res) => {
      setProducts(
        res.products.filter((product) => {
          const title = product.title.toLowerCase();
          return title.includes(input.toLowerCase());
        })
      );
    });
  };

  return (
    <UserNavContainer>
      <div className="leftside">
        <img classname="mainlogo" src={Logoimg} />
        <a className="title2" href="/">
          Easyfert
        </a>
      </div>

      <div className="rightside">

        {/* <form onSubmit={searchClick}>
          <button type="submit">
            <FaSearch className="search" />
          </button>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="O que você busca?"
          ></input>

          {/* <div className="dropdown">
            {products.map((product) => (
              <Link key={product._id} to={`product/${product._id}`}>
                {product.title}
              </Link>
            ))}
          </div> */}

        </form> */}

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
        <a className="icon" href="/myaccount">
          <FaUser />
        </a>
      </div>
    </UserNavContainer>
  );
}

export default Header;

const getServerSideProps = async () => {
  const products = await client.fetch('*[_type=="product"]');
  return {
    products,
  };
};

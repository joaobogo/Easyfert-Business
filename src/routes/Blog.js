import UserProfileContainer from "../components/styles/UserProfile.styles";
import { Link } from "react-router-dom";
import UserHeader from "../components/UserHeader";
import CustomerOrderContainer from "../components/styles/CustomerOrder.styles";
import Footer from "../components/Footer";
import Lowfooter from "../components/Lowfooter";
import React, { useEffect, useState } from "react";
import ProductContainer from "../components/styles/ProductContainer.styled";
import { client } from "../client";
import ProductCard from "../components/ProductCard";
import MapContainer from "../components/styles/ProductMapContainer.styles";
import PostCard from "../components/PostCard";

function UserProfile() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getServerSideProps().then((res) => {
      setPosts(res.posts);
    });
  }, []);

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
          <CustomerOrderContainer>
            <div className="rightbar">
              <h2>Últimas Notícias</h2>
              <MapContainer>
                {posts.map((post) => (
                  <PostCard key={post._id} post={post} />
                ))}
              </MapContainer>
            </div>
          </CustomerOrderContainer>
        </div>
      </UserProfileContainer>
      <Footer />
      <Lowfooter />
    </div>
  );
}

const getServerSideProps = async () => {
  const posts = await client.fetch('*[_type=="post"]');
  return {
    posts,
  };
};

export default UserProfile;

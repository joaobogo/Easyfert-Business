import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { client, urlFor } from "../client";
import Header from "../components/Header";
import Lowfooter from "../components/Lowfooter";
import Footer from "../components/Footer";
import ProductDetailsContainer from "../components/styles/ProductDetails.styles";
import { getString } from "../functions";
import { PortableText } from "@portabletext/react";

function Blogdetails() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    getById(id).then((post) => {
      setPost(post);
      console.log(post.body);
    });
  }, []);

  return (
    <>
      <Header />

      <ProductDetailsContainer>
        {post ? (
          <section>
            <div className="rightmenu">
              <h2>{post.title}</h2>
              <p>{post.author}</p>
              <p>{post.published_at}</p>
              {post.image && <img src={urlFor(post.image)}></img>}
              <PortableText value={post.body} />
            </div>
          </section>
        ) : (
          <span> Carregando ....</span>
        )}
      </ProductDetailsContainer>

      <Footer />
      <Lowfooter />
    </>
  );
}
const getById = async (id) => {
  const post = await client.getDocument(id);
  return post;
};

export default Blogdetails;

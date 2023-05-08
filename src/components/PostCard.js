import React, { useContext, useEffect, useState } from "react";
import { urlFor } from "../client";
import { Link } from "react-router-dom";
import PostCardContainer from "./styles/Postcard.styles";
import { PortableText } from "@portabletext/react";

function PostCard({ post }) {
  return (
    <PostCardContainer>
      {post.external_link ? (
        <div className="card">
          <a href={post.external_link}>
            {post.image && <img src={urlFor(post.image)} />}

            <h2>
              <strong>{post.title}</strong>
            </h2>
            <p>
              <strong>Autor:</strong> {post.author}
            </p>
            <PortableText value={post.body} />
            <div className="buttoncontainer">
              <Link className="button" to={post.external_link}>
                Click aqui para saber mais
              </Link>
            </div>
          </a>
        </div>
      ) : (
        <div className="card">
          <Link to={post._id}>
            {post.image && <img src={urlFor(post.image)} />}
            <h2>{post.title}</h2>
            <p>{post.author}</p>
            <PortableText value={post.body} />
            <Link to={post._id}>Click aqui para saber mais</Link>
          </Link>
        </div>
      )}
    </PostCardContainer>
  );
}

export default PostCard;

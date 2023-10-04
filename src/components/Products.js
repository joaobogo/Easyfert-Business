import React, { useContext, useEffect, useState } from "react";
import ProductContainer from "./styles/ProductContainer.styled";
import { client } from "../client";
import ProductCard from "./ProductCard";
import MapContainer from "./styles/ProductMapContainer.styles";
import { getBlingProducts } from "../functions";
import CartContext from "../context/Cartcontext";
import Loading from "./Loading";

function Products() {
  const { sanityprod, isLoading } = useContext(CartContext);

  return (
    <ProductContainer>
      <h1>Mais Vendidos</h1>
      {isLoading ? (
        <Loading />
      ) : (
        <MapContainer>
          {sanityprod.products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </MapContainer>
      )}
    </ProductContainer>
  );
}

// const getServerSideProps = async () => {
//   const products = await client.fetch('*[_type=="product"]');
//   return {
//     products,
//   };
// };

export default Products;

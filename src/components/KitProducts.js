import React, { useEffect, useState, useContext } from "react";
import ProductContainer from "./styles/ProductContainer.styled";
import { client } from "../client";
import ProductCard from "./ProductCard";
import MapContainer from "./styles/ProductMapContainer.styles";
import { getBlingProducts } from "../functions";
import CartContext from "../context/Cartcontext";
import Loading from "./Loading";

function KitProducts() {
  const { sanityprod, isLoading } = useContext(CartContext);

  return (
    <ProductContainer>
      <h1 id="kits" name="kits" className="kittitle">
        Kits
      </h1>
      {isLoading ? (
        <Loading />
      ) : (
        <MapContainer>
          {sanityprod.kits.map((kit) => (
            <ProductCard key={kit._id} product={kit} />
          ))}
        </MapContainer>
      )}
    </ProductContainer>
  );
}

const getServerSideProps = async () => {
  const kits = await client.fetch('*[_type=="kit"]');
  return {
    kits,
  };
};

export default KitProducts;

import React, { useEffect, useState } from "react";
import ProductContainer from "./styles/ProductContainer.styled";
import { client } from "../client";
import ProductCard from "./ProductCard";
import MapContainer from "./styles/ProductMapContainer.styles";
import { getBlingProducts } from "../functions";

function KitProducts() {

  const [kits, setKits] = useState([]);

  useEffect(() => {
    getServerSideProps().then((res) => {
      setKits(res.kits);
    });
    getBlingProducts().then(console.log)
  }, []);

    
  return (
    <ProductContainer>
      <h1>Kits</h1>
      <MapContainer>
        {Kits.map((kit) => ( //PAREI AQUI
          <ProductCard key={product._id} product={product} />
        ))}
      </MapContainer>
    </ProductContainer>
  );
}

const getServerSideProps = async () => {
  const kits = await client.fetch('*[_type=="kit"]');
  return {
    kits,
  };
};

export default Products;
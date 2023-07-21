import React, { useContext, useEffect, useState } from "react";
import ProductContainer from "./styles/ProductContainer.styled";
import { client } from "../client";
import ProductCard from "./ProductCard";
import MapContainer from "./styles/ProductMapContainer.styles";
import { getBlingProducts } from "../functions";
import CartContext from "../context/Cartcontext";

function Products() {
  const [products, setProducts] = useState([]);
  const { tokenData, handleToken } = useContext(CartContext);

  useEffect(() => {
    // getServerSideProps().then((res) => {
    //   setProducts(res.products);
    // });
    getBlingProducts(tokenData,handleToken).then((res)=>{
      setProducts(res.products);
    })
  }, []);

  return (
    <ProductContainer>
      <h1>Mais Vendidos</h1>
      <MapContainer>
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </MapContainer>
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

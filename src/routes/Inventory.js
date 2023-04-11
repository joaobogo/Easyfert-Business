import React, { useEffect, useState } from "react";
import ProductContainer from "../components/styles/ProductContainer.styled";
import { client } from "../client";
import MapContainer from "../components/styles/ProductMapContainer.styles";
import ProductInventory from "../components/ProductInventory";
import CreateProduct from "../components/CreateProduct.js";

function Inventory() {
  const [products, setProducts] = useState([]);
const [isCreating, setIsCreating] = useState(false)


  useEffect(() => {
    getServerSideProps().then((res) => {
      setProducts(res.products);
    });
  }, []);

  const handleDestroy = ()=>{
    getServerSideProps().then((res) => {
        setProducts(res.products);
      });
  }

  return (
    <ProductContainer>
      <h1>Estoque</h1>
      <MapContainer>
        {products.map((product) => (
          <ProductInventory handleDestroy={handleDestroy} key={product._id} product={product} />
        ))}
      </MapContainer>
      <button onClick={()=> setIsCreating(true)}>Adicionar Produto</button>
      {isCreating ? <CreateProduct/> : null}
    </ProductContainer>
  );
}

const getServerSideProps = async () => {
  const products = await client.fetch('*[_type=="product"]');
  return {
    products,
  };
};

export default Inventory;

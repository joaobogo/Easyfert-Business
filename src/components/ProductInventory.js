import React, { useContext, useState } from "react";
import { urlFor } from "../client";
import ProductCardContainer from "./styles/ProductCard.styles";
import { Link } from "react-router-dom";
import { formatCurrency } from "../functions";
import { client } from "../client";

function ProductInventory({ product, handleDestroy }) {
  const [quantity, setQuantity] = useState(product.quantity);
  const [isEditing, setIsEditing] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);

  const handleClick = () => {
    setIsEditing(true);
  };

  const handleUpdate = () => {
    client
      .patch(product._id)
      .set({ quantity: Number(quantity) })
      .commit();
    setIsEditing(false);
  };

  const handleDelete = () => {
    client.delete(product._id).then(handleDestroy);
    setIsDeleted(true)
  };

  return (
    <ProductCardContainer>
      <div>
        {product.image && product.image.length && (
          <img src={urlFor(product.image[0])}></img>
        )}

        <h3>{product.title}</h3>
        <p>{formatCurrency(product.price)}</p>
      </div>

      <div className="buttoncontainer">
        <button className="buybutton" onClick={handleClick}>
          Editar Quantidade
        </button>
        <button className="detailsbutton" onClick={handleDelete}>
          Excluir Produto
        </button>
      </div>
      {isDeleted ? <p>Produto Deletado</p> : null}
      {isEditing ? (
        <div>
          <input
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            type="number"
          ></input>
          <button onClick={handleUpdate}>Confirmar Alteração</button>
        </div>
      ) : null}
    </ProductCardContainer>
    
  );
}

export default ProductInventory;

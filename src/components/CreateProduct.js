import React, { useEffect, useState } from "react";
import { client } from "../client";


function CreateProduct() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
const [alertText, setAlertText] = useState('')


const handleClick = (e)=>{
    e.preventDefault()
    const product = {
        title,
        description,
        price: Number(price),
        quantity: Number(quantity),
        _type: 'product'
    }

    client.create(product).then(()=> setAlertText('Produto Criado')).catch(console.log)
}


  return (
    <form>
      <input
        type="text"
        placeholder="Título"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      ></input>
      <input
        type="text"
        placeholder="Descrição"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></input>
      <input
        type="number"
        placeholder="Preço"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      ></input>
      <input
        type="number"
        placeholder="Quantidade"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      ></input>
      <button onClick={handleClick}>Criar Produto</button>
      <p>{alertText}</p>
    </form>
  );
}

export default CreateProduct;

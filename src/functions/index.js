import axios from "axios";

export const getsum = (items) => {
  return items.reduce((acc, product) => acc + product.price, 0);
};

export const getTotalSum = (items) => {
  return items.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  );
};

export const translate = (word) => {
  const english = {
    pending: "Pendente",
    approved: "Aprovado",
    cancelled: "Cancelado",
  };
  if (english[word]) return english[word];
  return word;
};

export const formatCurrency = (number) => {
  const fixedNumber = Number(number).toFixed(2);
  const newnumber = fixedNumber.toString();
  const [integer, decimal] = newnumber.split(".");
  const cents = decimal ? decimal.padEnd(2, "0") : "00";
  const newinteger = Number(integer) > 0 ? integer : "0";
  return `R$${newinteger},${cents}`;
};

export const saveToCart = (newcart) => {
  localStorage.setItem("newcart", JSON.stringify(newcart));
};

export const handlePac = (state, city, shippings, cart) => {
  const shippingByLocation = {
    PR: "Mesmo Estado - PAC",
    RS: "Região Sul - PAC",
    SP: "São Paulo - PAC",
    SC: "Região Sul - PAC",
  };
  let description = "";
  if (city === "Curitiba" && state === "PR") {
    description = "Mesma Cidade - PAC";
  } else if (Object.keys(shippingByLocation).includes(state)) {
    description = shippingByLocation[state];
  } else {
    description = "Brasil - PAC";
  }
  console.log(description);
  const shipping = shippings.find((item) => item.description === description);
  return shipping.price * countQuantity(cart);
};

export const countQuantity = (cart) => {
  let quantity = 0;
  for (let index = 0; index < cart.length; index++) {
    const element = cart[index];
    quantity += element.quantity;
  }
  return quantity;
};

export const handleSedex = (state, city, shippings, cart) => {
  const shippingByLocation = {
    PR: "Mesmo Estado - Sedex",
    RS: "Região Sul - Sedex",
    SP: "São Paulo - Sedex",
    SC: "Região Sul - Sedex",
  };
  let description = "";
  if (city === "Curitiba" && state === "PR") {
    description = "Mesma Cidade - Sedex";
  } else if (Object.keys(shippingByLocation).includes(state)) {
    description = shippingByLocation[state];
  } else {
    description = "Brasil - Sedex";
  }
  const shipping = shippings.find((item) => item.description === description);
  return shipping.price * countQuantity(cart);
};

export const getBlingToken = async () => {
  const url = "https://easyfert.onrender.com/bling?frontend=true";
  const res = await axios.get(url);
  return res.data.token;
};

export const getBlingProducts = async (tokenData, handleToken) => {
  const { access_token, refresh_token, expires_in } = tokenData;
  const BaseUrl = "https://easyfert.onrender.com/bling?frontend=true";
  let url = `${BaseUrl}&refresh_token=${refresh_token}`;
  if (expires_in > Date.now()) {
    url = `${BaseUrl}&access_token=${access_token}`;
  }
  const res = await axios.get(url);
  if (res.data.token !== access_token) {
    handleToken(res.data.tokenData);
  }
  const blingRes = JSON.parse(res.data.blingResponse);
  console.log(blingRes);
  const products = blingRes.data.retorno.produtos.map(({ produto }) => ({
    _id: produto.codigo,
    image: produto.imageThumbnail,
    title: produto.descricao,
    price: Number(produto.preco),
    description: produto.descricaoCurta,
    description2: produto.descricaoComplementar,
    quantity: produto.estoqueAtual,
    tags: [],
    availability: produto.situacao,
    brand: produto.marca,
    kit: produto.volumes > 1,
  }));
  console.log(products);
  return {
    products: products.filter(({ kit }) => !kit),
    kits: products.filter(({ kit }) => kit),
  };

  // const apikey = process.env.REACT_APP_BLING;
  // const URL = `https://bling.com.br/Api/v2/produtos/json?apikey=${apikey}`;
  // const token = "cd4d2a2eb54ff755a0ca0589b27070e9d6472bc1";
  // try {
  //   const authorization = `Bearer ${token}`;
  //   const headers = { authorization };
  //   const response = await axios.get(URL, { headers });
  //   return response.data;
  // } catch (error) {
  //   const token = await getBlingToken();
  //   const authorization = `Bearer ${token}`;
  //   const headers = { authorization };
  //   const data = await axios.get(URL, { headers });
  //   return data;
  //   return error;
  // }
};

export const getString = (block) => {
  let result = "";
  for (let index = 0; index < block.length; index++) {
    const text = block[index].text;
    result += text;
  }
  return result;
};

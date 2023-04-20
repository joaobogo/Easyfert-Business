import axios from 'axios'


export const getsum = (items) => {
  return items.reduce((acc, product) => acc + product.price, 0);
};

export const getTotalSum = (items) => {
  return items.reduce((acc, product) => acc +  (product.price*product.quantity), 0);
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
  const fixedNumber = (Number(number)).toFixed(2)
  const newnumber = fixedNumber.toString();
  const [integer, decimal] = newnumber.split(".");
  const cents = decimal ? decimal.padEnd(2, "0") : "00";
  const newinteger = Number(integer) > 0 ? integer : "0";
  return `R$${newinteger},${cents}`;
};

export const saveToCart = (newcart) => {
  localStorage.setItem("newcart", JSON.stringify(newcart));
};

export const handlePac = (state, city, shippings) => {
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
  return shipping.price;
};

export const handleSedex = (state, city, shippings) => {
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
  return shipping.price;
};

export const getBlingProducts = async () => {
  const apikey = process.env.REACT_APP_BLING;
  const URL = `https://bling.com.br/Api/v2/produtos/json?apikey=${apikey}`;
  const response = await axios.get(URL)
  return response
};


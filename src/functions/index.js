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

export const getProdutos = async (tokenData) => {
  const { access_token } = tokenData;
  const BaseUrl = "https://easyfert.onrender.com/bling?frontend=true";
  const url = `${BaseUrl}&access_token=${access_token}`;
  const res = await axios.get(url);
  const blingRes = JSON.parse(res.data.blingResponse);
  return blingRes.data.retorno.produtos;
};

export const refreshandget = async (refresh_token, setToken, _id) => {
  const BaseUrl = "https://easyfert.onrender.com/bling/refresh";
  const url = `${BaseUrl}?refresh_token=${refresh_token}`;
  const { data } = await axios.get(url);
  console.log("refresh", data)
  const expires_in = Date.now()+(data.expires_in*1000)
  setToken({...data,_id, expires_in});
  const res = await getBlingProducts(data);
  return res;
};

export const getBlingProducts = async (tokenData) => {
  const produtos = await getProdutos(tokenData);
  console.log(produtos);
  const products = produtos.map(({ produto }) => ({
    _id: produto.codigo,
    image: produto.imagem[0].link,
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

export const getImages = (images) => {
  if (!images) {
    return "";
  }
  let result = "";
  for (let index = 0; index < images.length; index++) {
    const image = images[index];
    result += `
      <imagens>
        <url>${image.url}</url>
      </imagens>
      `;
  }
  return result;
};

export const getDeposito = (depositos) => {
  if (!depositos) {
    return "";
  }
  let result = "";
  for (let index = 0; index < depositos.length; index++) {
    const { deposito } = depositos[index];
    result += `
     <deposito>
        <id>${deposito.id}</id>
        <estoque>${deposito.saldo - 1}</estoque>
     </deposito>
      `;
  }
  return result;
};

export const jsonToXml = (produto) => {
  return `<?xml version="1.0" encoding="UTF-8"?><produto><codigo>${
    produto.codigo
  }</codigo><descricao>${produto.descricao}</descricao><situacao>${
    produto.situacao
  }</situacao><descricaoComplementar>${
    produto.descricaoComplementar
  }<descricaoComplementar><descricaoCurta>${
    produto.descricaoCurta
  }<descricaoCurta/><un>${produto.unidade}</un><vlr_unit>${
    produto.preco
  }</vlr_unit><preco_custo>${produto.precoCusto}</preco_custo><peso_bruto>${
    produto.pesoBruto
  }</peso_bruto><peso_liq>${produto.pesoLiq}</peso_liq><class_fiscal>${
    produto.class_fiscal
  }</class_fiscal><marca>${produto.marca}</marca><origem>${
    produto.origem
  }</origem><estoque>${produto.estoqueAtual}</estoque><gtin>${
    produto.gtin
  }</gtin><localizacao>${produto.localizacao}<localizacao/><gtinEmbalagem>${
    produto.gtinEmbalagem
  }</gtinEmbalagem><largura>${produto.larguraProduto}</largura><altura>${
    produto.alturaProduto
  }</altura><profundidade>${
    produto.profundidadeProduto
  }</profundidade><estoqueMinimo>${
    produto.estoqueMinimo
  }</estoqueMinimo><estoqueMaximo>${
    produto.estoqueMaximo
  }</estoqueMaximo><cest>${produto.cest}</cest><idGrupoProduto>${
    produto.idGrupoProduto
  }</idGrupoProduto><condicao>${produto.condicao}</condicao><freteGratis>${
    produto.freteGratis
  }</freteGratis><linkExterno>${
    produto.linkExterno
  }</linkExterno><observacoes>${produto.observacoes}</observacoes><producao>${
    produto.producao
  }</producao><dataValidade>${
    produto.dataValidade
  }</dataValidade><descricaoFornecedor>${
    produto.descricaoFornecedor
  }</descricaoFornecedor><nomeFornecedor>${
    produto.nomeFornecedor
  }</nomeFornecedor><idFabricante>${
    produto.idFabricante
  }</idFabricante><codigoFabricante>${
    produto.codigoFabricante
  }</codigoFabricante><unidadeMedida>${
    produto.unidadeMedida
  }</unidadeMedida><crossdocking>${
    produto.crossdocking
  }</crossdocking><garantia>${produto.garantia}</garantia><itensPorCaixa>${
    produto.itensPorCaixa
  }</itensPorCaixa><volumes>${produto.volumes}</volumes><urlVideo>${
    produto.urlVideo
  }</urlVideo>${getDeposito(produto.depositos)}${getImages(
    produto.imagens
  )}<idCategoria>${produto.categoria.id}</idCategoria><spedTipoItem>${
    produto.spedTipoItem
  }<spedTipoItem/><tipo>${produto.tipo}<tipo/></produto>`;
};

// export const jsonToXml = (produto) => {
//   return `
//     <?xml version="1.0" encoding="UTF-8"?>
//     <produto>
//        <codigo>${produto.codigo}</codigo>
//        <descricao>${produto.descricao}</descricao>
//        <situacao>${produto.situacao}</situacao>
//   <descricaoComplementar>${
//     produto.descricaoComplementar
//   }</descricaoComplementar>
//   <descricaoCurta>${produto.descricaoCurta}<descricaoCurta/>
//        <un>${produto.unidade}</un>
//        <vlr_unit>${produto.preco}</vlr_unit>
//        <preco_custo>${produto.precoCusto}</preco_custo>
//        <peso_bruto>${produto.pesoBruto}</peso_bruto>
//        <peso_liq>${produto.pesoLiq}</peso_liq>
//        <class_fiscal>${produto.class_fiscal}</class_fiscal>
//        <marca>${produto.marca}</marca>
//        <origem>${produto.origem}</origem>
//        <estoque>${produto.estoqueAtual}</estoque>
//        <gtin>${produto.gtin}</gtin>
//        <localizacao>${produto.localizacao}<localizacao/>
//      <gtinEmbalagem>${produto.gtinEmbalagem}</gtinEmbalagem>
//      <largura>${produto.larguraProduto}</largura>
//      <altura>${produto.alturaProduto}</altura>
//      <profundidade>${produto.profundidadeProduto}</profundidade>
//      <estoqueMinimo>${produto.estoqueMinimo}</estoqueMinimo>
//      <estoqueMaximo>${produto.estoqueMaximo}</estoqueMaximo>
//      <cest>${produto.cest}</cest>
//      <idGrupoProduto>${produto.idGrupoProduto}</idGrupoProduto>
//      <condicao>${produto.condicao}</condicao>
//      <freteGratis>${produto.freteGratis}</freteGratis>
//      <linkExterno>${produto.linkExterno}</linkExterno>
//      <observacoes>${produto.observacoes}</observacoes>
//      <producao>${produto.producao}</producao>
//      <dataValidade>${produto.dataValidade}</dataValidade>
//      <descricaoFornecedor>${produto.descricaoFornecedor}</descricaoFornecedor>
//      <nomeFornecedor>${produto.nomeFornecedor}</nomeFornecedor>
//      <idFabricante>${produto.idFabricante}</idFabricante>
//      <codigoFabricante>${produto.codigoFabricante}</codigoFabricante>
//       <unidadeMedida>${produto.unidadeMedida}</unidadeMedida>
//      <crossdocking>${produto.crossdocking}</crossdocking>
//      <garantia>${produto.garantia}</garantia>
//      <itensPorCaixa>${produto.itensPorCaixa}</itensPorCaixa>
//      <volumes>${produto.volumes}</volumes>
//      <urlVideo>${produto.urlVideo}</urlVideo>
//      ${getDeposito(produto.depositos)}
//      ${getImages(produto.imagens)}
//      <idCategoria>${produto.categoria.id}</idCategoria>
//    <spedTipoItem>${produto.spedTipoItem}<spedTipoItem/>
//     <tipo>${produto.tipo}<tipo/>
//    </produto>
//   `;
// };

export const postBlingOrder = async (order, token) => {
  const url = `https://easyfert.onrender.com/bling/sellorder`;
  const body = {
    order, 
    token
  }
  const response = await axios.post(url, body);
  console.log(response);
}


// export const updateBling = async (order, tokenData, handleToken) => {
 
//   const produtos = await getProdutos(tokenData, handleToken);
//   for (let index = 0; index < products.length; index++) {
//     const [id, quantity] = products[index].split("_");
//     const { produto } = produtos.find((p) => p.produto.codigo === id);
//     produto.estoqueAtual -= Number(quantity);
//     const xmlBody = jsonToXml(produto);
//     const url = `https://easyfert.onrender.com/bling/${id}`;
//     const body = { xmlBody, token: tokenData.access_token };
//     const response = await axios.post(url, body);
//     console.log(response);
//   }
// };

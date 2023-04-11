import axios from "axios";


const api = axios.create({
    baseURL: "https://api.mercadopago.com",
  });
  
  api.interceptors.request.use(async (config) => {
    const token = process.env.REACT_APP_MERCADOPAGO;
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  });

export default api 

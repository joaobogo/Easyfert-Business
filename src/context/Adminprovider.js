import React, { useEffect, useState } from "react";
import AdminContext from "./Admincontext";
import { client } from "../client";

const logId = localStorage.getItem("EasyfertAdmin");
const logStatus = !!logId

function Adminprovider({ children }) {
  const [sanityprod, setSanityProd] = useState([]);
  const [isLogged, setIsLogged] = useState(logStatus);
  const [user, setUser] = useState(null);

  useEffect(() => {
    if(isLogged){
        client
        .fetch('*[_type=="product"]')
        .then((product) => {
          setSanityProd(product)
        console.log(product)
        });
        client
        .fetch('*[_type=="user"]')
        .then((users) => {
            const userData = users.find(({email})=> email === logId)
            setUser(userData)
        });
    }
  }, [isLogged]);

  const handleLoggedin = (islogged,id) => {
    setIsLogged(islogged);
    localStorage.setItem("EasyfertAdmin", id);
  };

  const globalState = { sanityprod, isLogged, handleLoggedin, user, setUser };

  return (
    <AdminContext.Provider value={globalState}>
      {children}
    </AdminContext.Provider>
  );
}

export default Adminprovider;

import styled from "styled-components";

const ProductCardContainer = styled.div`
  width: 350px;
  height: 500px;
  display: flex;
  flex-direction: column;
  margin: 25px;
  margin-top: 80px;
  align-items: center;
  text-align: center;
  background-color: white;
  border-color: #98711d;
  border-radius: 10px;
  -moz-box-shadow: 0 0 20px #ccc;
  -webkit-box-shadow: 0 0 20px #ccc;
  box-shadow: 0 0 20px #ccc;
  border:solid 1px white;

  :hover {
    border: solid 1px #344e41;
    transition: 0.2s;
  }

  span {
    font-family: Arial, Helvetica, sans-serif;
    text-align: center;
    font-size: 16px;
    color: #076a58;
  }

  :hover .buybutton {
    display: inline-block;
  }

  :hover .detailsbutton {
    display: inline-block;
  }

  .buttoncontainer {
    display: flex;
    justify-content: space-evenly;
    
  }

  .buybutton {
    height: 50px;
    border: transparent;
    background-color: #076a58;
    font-weight: bold;
    color: white;
    font-size: 16px;
    width: 40%;
    transition: 0.3s;
    border-radius: 5px;
  }

  .detailsbutton {
    height: 50px;
    border: transparent;
    background-color: #076a58;
    font-weight: bold;
    color: white;
    font-size: 16px;
    width: 40%;
    transition: 0.3s;
    border-radius: 5px;
  }

  .detailsbutton:hover{
    background-color: #207969;
    border: #febc30 solid 2px;
    transition: 0.1s;
    cursor: pointer;
    display: inline-block;
  }

  .buybutton:hover {
    background-color: #207969;
    border: #febc30 solid 2px;
    transition: 0.1s;
    cursor: pointer;
    display: inline-block;
  }

  img {
    transform: scale(0.5);
    margin-top: -100px;
  }

  h3 {
    margin-top: -100px;
    font-size: 18px;
    text-align: center;
    color: #076a58;
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
    padding: 10px;
  }

  p {
    font-family: Arial, Helvetica, sans-serif;
    text-align: center;
    font-size: 20px;
    margin-top: 10px;
    margin-left: 2px;
    margin-right: 2px;
  }
`;

export default ProductCardContainer;

import styled from "styled-components";

const ProductCardContainer = styled.div`
  width: 350px;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 25px;
  margin-top: 80px;
  align-items: center;
  text-align: center;
  background-color: white;
  border-color: #98711d;
  border-radius: 10px;
  -moz-box-shadow: 0 0 20px #ccc;
  -webkit-box-shadow: 0 0 20px #ccc;
  box-shadow: 0 0 20px #b5d2cd;
  border: solid 1px white;
  padding: 10px;

  :hover {
    border: solid 1px #344e41;
    transition: 0.2s;
  }

  span {
    text-align: center;
    font-size: 16px;
    color: #076a58;
  }

  .buttoncontainer {
    display: flex;
    justify-content: space-evenly;
  }

  .buybutton {
    height: 50px;
    border: solid #076a58 1px;
    background-color: #076a58;
    font-weight: bold;
    color: white;
    font-size: 16px;
    width: 40%;
    transition: 0.3s;
    border-radius: 5px;
    font-family: "Roboto", sans-serif;
  }

  .detailsbutton {
    font-family: "Roboto", sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 48px;
    border: solid #076a58 1px;
    background-color: #076a58;
    font-weight: bold;
    color: white;
    font-size: 16px;
    width: 40%;
    transition: 0.3s;
    border-radius: 5px;
  }

  .detailsbutton:hover {
    background-color: #207969;
    border: #febc30 solid 1px;
    transition: 0.1s;
    cursor: pointer;
  }

  .buybutton:hover {
    background-color: #207969;
    border: #febc30 solid 1px;
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

    padding: 10px;
    align-self: center;
    width: 85%;
    margin-left: 20px;
  }

  span {
    margin-bottom: 15px;
  }

  p {
    text-align: center;
    font-size: 20px;
    margin-top: 10px;
    margin-left: 2px;
    margin-right: 2px;
  }

  @media (max-width: 1250px) {
  }

  @media (max-width: 768px) {
 
  }

  @media (max-width: 320px) {
  }
`;

export default ProductCardContainer;

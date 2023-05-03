import styled from "styled-components";

const ProductCardContainer = styled.div`
  width: 21.88rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 25px;
  margin-top: 50px;
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
  max-width: 20%;

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
    flex-direction: column;
    justify-content: space-evenly;
    gap: 5px;
    width: 100%;

  }

  .buybutton {
    height: 50%;
    border: solid #076a58 1px;
    background-color: #076a58;
    font-weight: bold;
    color: white;
    font-size: 14px;
    width: 100%;
    transition: 0.3s;
    border-radius: 5px;
    font-family: "Roboto", sans-serif;
  }

  .detailsbutton {
    font-family: "Roboto", sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50%;
    border: solid #076a58 1px;
    background-color: #076a58;
    font-weight: bold;
    color: white;
    font-size: 14px;
    width: 100%;
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
    transform: scale(0.55);
    margin-top: -50px;
  }

  h3 {
    margin-top: -2rem;
    font-size: 16px;
    text-align: center;
    color: #076a58;
    align-self: center;
    width: 85%;
  }

  span {
    margin-bottom: 15px;
  }

  p {
    text-align: center;
    font-size: 16px;
    margin-top: 10px;
  }

  a {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    max-width: 100%;
  }

  @media (max-width: 1250px) {
  }

  @media (max-width: 768px) {
    max-width: 35%;
    margin: 2%;

    .buybutton {
      width: 100%;
      font-size: 12px;
    }

    .detailsbutton {
      width: 100%;
      font-size: 12px;
    }

    h3 {
      font-size: 12px;
      margin: 0;
      width: 100%;
    }

    img {
      margin: 0;
      transform: scale(.8);
    }

    p {
      font-size: 12px;
     
    }

    .buttoncontainer {
      display: flex;
      flex-direction: column;
   
    }
  }

  @media (max-width: 320px) {
  }
`;

export default ProductCardContainer;

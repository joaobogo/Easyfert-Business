import styled from "styled-components";

const ProductDetailsContainer = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap');
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 50px;

  
  .fretep {
    text-align: center;
  }

  .arrows {
    background-color: transparent;
    border: none;
    font-size: 24px;
    font-weight: bolder;
  }

  .arrows:hover {
    cursor: pointer;
  }

  .shippingbutton {
    width: 160px;
    height: 35px;
    background-color: #076a58;
    color: white;
    border-radius: 10px;
    font-family: 'Roboto', sans-serif;
    font-weight: bolder;
  }

  .shippingbutton:hover {
    background-color: #51978a;
    cursor: pointer;
    transition: 0.3s;
  }

  .shippinginput {
    display: flex;
    justify-content: center;
  }

  .buttoncontainer {
    display: flex;
    justify-content: space-evenly;
    margin: 10px;
  }

  .leftmenu img {
    transform: scale(0.7);
  }

  .addedprod {
    width: 355px;
    text-align: center;
    font-size: 18px;
    color: #076a58;
  }
  .rightcolumn {
    display: flex;
    flex-direction: column;
  }

  section {
    display: flex;
    padding: 25px;
    justify-content: space-evenly;
  }

  .pricetag {
    font-size: 24px;
  }

  .description {
    text-align: justify;
  }

  .rightmenu {
    border: solid 1px;
    border-color: #344e41;
    width: 30%;
    text-align: left;
    padding: 15px;
    box-shadow: 0 0 10px #b5d2cd;
  }

  .rightmenu .buybutton {
    width: 100%;
    height: 50px;
    font-size: 16px;
    background-color: #076a58;
    color: white;
    font-weight: bold;
    border-radius: 10px;
    font-family: 'Roboto', sans-serif;
    font-weight: bolder;
  }

  .rightmenu .buybutton:hover {
    background-color: #51978a;
    cursor: pointer;
    transition: 0.3s;
  }
`;

export default ProductDetailsContainer;

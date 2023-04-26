import styled from "styled-components";

const ShoppingCartContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  h1 {
    color: #076a58;
  }

  .buybutton {
    margin-bottom: 50px;
    width: 200px;
    height: 50px;
    font-size: 16px;
    background-color: #076a58;
    color: white;
    font-weight: bold;
    border-radius: 10px;
    border-color: #febc30;
  }

  .buybutton:hover {
    background-color: #51978a;
    cursor: pointer;
    transition: 0.3s;
  }

  .buttons {
    margin-top: 25px;
    text-align: center;
  }

  .buttons button {
    margin: 5px;
  }

  @media (max-width: 1250px) {
    
  }

  @media (max-width: 768px) {
    font-size: 16px;

    input {
      margin-top: 10px;
    }
  }

  @media (max-width: 320px) {
  }
`;

export default ShoppingCartContainer;

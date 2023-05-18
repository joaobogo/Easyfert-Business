import styled from "styled-components";

const CartItemsContainer = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 2vh;

  .addbutton {
    width: 8vw;
    height: 50px;
    font-size: 12px;
    background-color: #076a58;
    color: white;
    font-weight: bold;
    border-radius: 10px;

  }

  .addbutton:hover {
    background-color: #51978a;
    cursor: pointer;
  }
  .delete {
    border-radius: 50%;
    border-color: transparent;
    color: white;
    background-color: red;
    font-size: 8px;
  }

  .delete:hover {
    transform: scale(1.2);
    cursor: pointer;
  }

  img {
    width: 100px;
  }

  @media (max-width: 1250px) {
  }

  @media (max-width: 768px) {
    gap: 10px;

    span {
      font-size: 14px;
    }

    img {
      transform: scale(0.7);
    }

    p {
      font-size: 14px;
    }

    .addbutton {
    width: 18vw;
    height: 50px;
    font-size: 12px;
 
 

  }
  }

  @media (max-width: 320px) {
  }
`;

export default CartItemsContainer;

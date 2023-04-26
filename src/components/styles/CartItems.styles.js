import styled from "styled-components";

const CartItemsContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

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
  }

  @media (max-width: 320px) {
  }
`;

export default CartItemsContainer;

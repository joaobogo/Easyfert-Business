import styled from "styled-components";

const ButtonContainer = styled.div`
  height: 50px;
  width: 700px;
  display: flex;
  justify-content: space-evenly;
  margin-top: 230px;
  margin-right: 850px;

  .button {
    border-radius: 10px;
    background-color: #076a58;
    font-weight: 600;
    width: 20.5rem;
    font-size: 16px;
    color: #dad7cd;
    border: solid #dad7cd 2px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    left: 32%;
    bottom: 135%;
  }

  a {
    color: #ffffff;
  }

  .button:hover {
    background-color: #207969;
    transition: 0.1s;
  }

  @media (max-width: 1250px) {
  }

  @media (max-width: 768px) {
    transform: scale(0.4);
    position: relative;
    width: 70%;
    text-align: center;
    left: -20%;
    bottom: 35%;
  }

  @media (max-width: 400px) {
    transform: scale(0.4);
    position: relative;
    width: 70%;
    text-align: center;
    left: -20%;
    bottom: 38%;
  }

  @media (max-width: 375px) {
    transform: scale(0.4);
    position: relative;
    text-align: center;
    left: -20%;
    bottom: 42%;
  }

  @media (max-width: 325px) {
    transform: scale(0.4);
    position: relative;
    text-align: center;
    left: -20%;
    bottom: 48%;
  }
`;

export default ButtonContainer;

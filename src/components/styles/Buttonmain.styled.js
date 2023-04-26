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
    width: 400px;
    font-size: 16px;
    color: #dad7cd;
    border: solid #dad7cd 2px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    left: 35px;
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
    bottom: 270px;
    left: -60px;
    text-align: center;
  }

  @media (max-width: 320px) {
  }
`;

export default ButtonContainer;

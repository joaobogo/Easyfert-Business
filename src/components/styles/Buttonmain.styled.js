import styled from "styled-components";

const ButtonContainer = styled.div`
  height: 50px;
  width: 700px;
  display: flex;
  justify-content: space-evenly;
  margin-top: 300px;
  margin-right: 850px;

  .button {
    border-radius: 10px;
    background-color: #076a58;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    font-weight: 600;
    width: 400px;
    font-size: 16px;
    color: #dad7cd;
    border: solid #febc30 2px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  a {
    color: #ffffff;
  }

  .button:hover {
    background-color: #398879;
    transition: 0.1s;
    color: #344e41;
  }
`;

export default ButtonContainer;

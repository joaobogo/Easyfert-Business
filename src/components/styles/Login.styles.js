import styled from "styled-components";

const LoginContainer = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background: rgb(2, 0, 36);
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(7, 106, 88, 1) 35%,
    rgba(205, 225, 222, 1) 100%
  );
  
  h2 {
    color: white;
    margin-bottom: 0;
    -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: black;
    font-size: 46px;
    margin-top: -40px;
  }

  .admintitle {
    font-size: 32px;
    display: flex;
    text-align: center;
    margin-top: 5px;
  }

  .title {
    margin-bottom: -15px;
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: solid 2px;
    width: 300px;
    height: 400px;
    border-radius: 10px;
    background-color: #51978a;
    box-shadow: 5px 5px black;
  }

  form input {
    border-radius: 5px;
    border: solid 1px black;
    height: 30px;
  }

  form p {
    color: white;
    width: 170px;
    margin-top: 25px;
  }

  form button {
    margin-top: 15px;
    border: solid white 1px;
    background: #398879;
    border-radius: 10px;
    font-size: 14px;
    width: 170px;
    height: 30px;
    color: white;
  }

  form button:hover {
    cursor: pointer;
    border: 1px solid white;
    background-color: #83b5ac;
  }

  Link {
    color: white;
  }

  a {
    color: white;
  }
`;

export default LoginContainer;

import styled from "styled-components";

const LoginContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 10vh;

  h2 {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 16px;
    font-weight: bold;
    text-align: left;
    width: 95%;
    margin: 0;
    border-bottom: solid black;
  }

  p {
    width: 100%;
    font-size: 14px;
  }

  input {
    width: 92%;
    border-radius: 10px;
    padding: 5px;
    border: 1px solid gray;
  }

  .left {
    border: solid 1px gray;
    width: 30vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 10px;
    padding-top: 10px;
    border-radius: 5px;
  }

  .right {
    border: solid 1px gray;
    border-radius: 5px;
    width: 30vw;
    height: auto;
    padding: 10px;
  }

  .buttoncontainer {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  button {
    margin-top: 10px;
    width: 30%;
    border: solid white 1px;
    background: #398879;
    border-radius: 10px;
    font-size: 14px;
    width: 170px;
    height: 30px;
    color: white;
    margin-bottom: -15px;
  }

  form button:hover {
    cursor: pointer;
    border: 1px solid white;
    background-color: #83b5ac;
    transition: 0.3s;
  }

  .signupbutton {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    text-decoration: none;
    margin-top: 10px;
    width: 100%;
    border: solid white 1px;
    background: #398879;
    border-radius: 10px;
    font-size: 14px;
    width: 170px;
    height: 30px;
    color: white;
    text-align: center;
  }

  a:hover{
    cursor: pointer;
    border: 1px solid white;
    background-color: #83b5ac;
    transition: 0.3s;
  }
  /* display: flex;
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

  .admintitle {
    font-size: 32px;
    display: flex;
    text-align: center;
    margin-top: 5px;
    margin-bottom: -5px;
    color: white;
    font-weight: bold;
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

  .response {
    text-align: center;
    color: red;
  }

  Link {
    color: white;
  }

  a {
    color: white;
  } */
`;

export default LoginContainer;

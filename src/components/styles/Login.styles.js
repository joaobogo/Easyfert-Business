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
  
  @media (max-width: 768px) {
  flex-direction: column;
gap: 20px;
padding-top: 5vh;

  .left{
    width: 80vw;
  }

  .right{
    width: 80vw;
  }

  }

  @media (max-width: 320px) {
  }
`;

export default LoginContainer;

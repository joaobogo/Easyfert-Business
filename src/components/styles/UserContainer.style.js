import styled from "styled-components";

const UserContainer = styled.div`
  border: solid;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(7, 106, 88, 1) 35%,
    rgba(205, 225, 222, 1) 100%
  );

  .card {
    border: solid;
    width: 400px;
    height: 170px;
    background-color: white;
    border-radius: 10px;
    box-shadow: 5px 5px black;
  }

  .card p {
    font-family: Arial, Helvetica, sans-serif;
    margin-left: 15px;
  }

  .card button {
    margin-left: 15px;
    margin-bottom: 10px;
    margin-top: 10px;
    border: solid black 1px;
    background: #398879;
    border-radius: 10px;
    font-size: 15px;
    color: white;
    width: 120px;
    height: 30px;
  }

  .card button:hover{
cursor: pointer;
background-color: #83b5ac ;
  }

  .card input {
    margin-left: 15px;
  }
`;

export default UserContainer;

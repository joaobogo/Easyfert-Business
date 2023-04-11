import styled from "styled-components";

const OrderContainer = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;

  .leftbar {
    border: solid;
    padding: 15px;
    border-radius: 0 5px 5px 0;
    border: solid #076a58;
    background-color: #9cc3bc;
  }

  .orderdetails {
    display: flex;
    flex-direction: column;
  }

  .button {
    background-color: #076a58;
    width: 150px;
    padding: 5px;
    border-radius: 10px;
  }

  .button:hover {
    cursor: pointer;
    background-color: #398879;
  }

  a {
    color: white;
  }
`;

export default OrderContainer;

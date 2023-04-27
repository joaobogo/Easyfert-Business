import styled from "styled-components";

const OrderDetailsContainer = styled.div`
   display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80vw;

  .rightbar {
    border: solid #076a58;
    text-align: justify;
    width: 600px;
    padding: 50px;
    margin: 30px;
    margin-bottom: black solid 1px;
    border-radius: 10px;
    background-color: white;
  }

  h2 {
    text-align: center;
    font-size: 32px;
    color: #076a58;
  }

  .rightbar p {
    border-bottom: solid 1px;
  }

  .orderagain {
    border: #076a58 solid;
    width: 150px;
    height: 50px;
    font-size: 14px;
    font-weight: bold;
    background-color: #076a58;
    color: white;
    border-radius: 5px;
  }

  .orderagain:hover {
    background-color: #51978a;
    transition: 0.3s;
    cursor: pointer;
  }

  @media (max-width: 1250px) {
  }

  @media (max-width: 768px) {
    h2 {
      margin-top: 0;
    }

    .rightbar {
      width: 60vw;
    }
  }

  @media (max-width: 320px) {
  }
`;

export default OrderDetailsContainer;

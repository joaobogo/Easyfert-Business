import styled from "styled-components";

const CheckoutContainer = styled.div`
  text-align: center;

  button {
    border: #076a58 solid;
    width: 150px;
    height: 50px;
    font-size: 14px;
    font-weight: bold;
    background-color: #076a58;
    color: #dad7cd;
    margin: 10px;
    border-radius: 5px;
    margin-bottom: 30px;
  }

  button:hover {
    background-color: #51978a;
    transition: 0.3s;
    cursor: pointer;
  }

  button:disabled {
    opacity: 0.6;
  }

  h1 {
    color: #076a58;
    margin-bottom: 40px;
  }

  p {
    margin: 0;
  }

  img {
    height: 40px;
    width: auto;
  }

  .selectrow {
    display: flex;
    align-items: center;
  }

  .selectrow.disabled * {
    opacity: 0.6;
  }

  .selectinput {
    width: 80px;
    align-items: center;
    transform: scale(0.5);
  }

  .selectrow label {
    display: flex;
    align-items: center;
  }

  .row {
    display: flex;
    justify-content: center;
  }

  .pstatus {
    padding-top: 25px;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
  }

  form input {
    width: 383px;
    height: 30px;
  }

  form .row {
    display: flex;
    gap: 15px;
    align-items: center;
  }

  form .row input {
    width: 180px;
  }

  @media (max-width: 1250px) {
  }

  @media (max-width: 768px) {
    
    h1 {
      margin-bottom: 25px;
    }

   form .row input{
    width: 40vw;
   }

   .emailinput{
    width: 86vw;
   }

    .enviop {
      margin-right: -15px;
    }

  }

  @media (max-width: 400px) {
  }
`;

export default CheckoutContainer;

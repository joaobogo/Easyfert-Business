import styled from "styled-components";

const UserProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100vw;
  text-align: center;
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(7, 106, 88, 1) 35%,
    rgba(205, 225, 222, 1) 100%
  );

  .leftbar {
    display: flex;
    gap: 10px;
  }

  .orderdetails {
    display: flex;
    flex-direction: column;
  }

  .button {
    background-color: #076a58;
    width: 150px;
    padding: 5px;
    border-radius: 10px 0px 0px 10px;
    margin-left: 200px;
    margin-right: 0px;
    margin-top: 10px;
    border: white solid 1px;
  }

  .button2 {
    background-color: #076a58;
    width: 150px;
    padding: 5px;
    border-radius: 10px;
    border: white solid 1px;
    margin-top: 15px;
  }

  .button:hover {
    cursor: pointer;
    background-color: #398879;
  }

  .button2:hover {
    cursor: pointer;
    background-color: #398879;
  }

  a {
    color: white;
  }

  @media (max-width: 1250px) {
  }

  @media (max-width: 768px) {
    .leftbar {
      transform: scale(0.8);
    }

 
  }

  @media (max-width: 320px) {
  }
`;

export default UserProfileContainer;

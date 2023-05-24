import styled from "styled-components";

const UserNavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  background-color: #e6f0ee;

  img {
    transform: scale(0.6);
  }

  .dropdown {
    position: absolute;
    top: 100%;
    left: 16%;
    font-size: 10px;
    flex-wrap: wrap;
    width: 70%;
    border: gray solid 1px;
    background-color: rgba(255, 255, 255);
    text-align: center;
    border-top: none;
    border-radius: 10px;
    padding: 2px;
  }

  .rightside input {
    width: 70%;
    background-color: rgba(255, 255, 255, 0.4);
    border: gray solid 1px;
    border-radius: 10px;
    text-align: center;
    margin-left: 5px;
  }

  form {
    position: relative;
  }
  
  .title {
    display: flex;
    align-items: center;

    font-family: "Secular One";
    color: #398879;
    font-size: 36px;
  }

  .title2 {
    display: flex;
    align-items: center;
    color: #398879;
    font-family: "Secular One";
    color: #398879;
    font-size: 36px;
  }

  .search {
    color: #398879;
  }

  .leftside {
    display: flex;
  }

  .rightside button {
    background-color: none;
    border: none;
  }
  .rightside {
    width: 300px;
    display: flex;
    justify-content: space-evenly;
  }

 
  .icon {
    color: #398879;
  }

  .icon:hover {
    color: #febc30;
    transition: 0.1s;
    cursor: pointer;
  }

  @media (max-width: 1250px) {
  }

  @media (max-width: 768px) {
    .title {
      font-size: 17px;
      margin-left: -15px;
    }

    .title2 {
      font-size: 26px;
      margin-left: -15px;
    }

    img {
      transform: scale(0.5);
      margin-left: -10px;
    }

    .rightside {
      transform: scale(0.8);
    }
  }

  @media (max-width: 320px) {
  }
`;

export default UserNavContainer;

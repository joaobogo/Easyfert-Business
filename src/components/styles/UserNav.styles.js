import styled from "styled-components";

const UserNavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    transform: scale(0.6);
  }

  .title {
    display: flex;
    align-items: center;
    color: #398879;
    font-family: "Secular One";
    color: #398879;
    font-size: 36px;
   
  }

  .leftside {
    display: flex;
  }

  .rightside{
    width: 150px;
    display: flex;
    justify-content: space-evenly;
  }

  .icon{
    color: #398879;
  }

  icon:hover{
    color: #febc30;
  transition: .1s;
  cursor: pointer;
  }
`;

export default UserNavContainer;

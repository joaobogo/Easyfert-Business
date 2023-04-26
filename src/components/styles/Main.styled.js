import styled from "styled-components";
import mainphoto from "../../assets/mainphoto.jpg";

const MainContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #fff;
  height: 550px;
  padding: 0;
  justify-content: space-between;
  background: url(${(props) => props.bgimage}) no-repeat;
  background-size: 100vw;

  .leftbutton {
    position: relative;
    bottom: 70px;
    left: 25px;
    border-radius: 50px;
    border: white;
    height: 20px;
    font-weight: bold;
    opacity: 80%;
  }

  .leftbutton:hover {
    cursor: pointer;
  }

  .rightbutton {
    position: relative;
    bottom: 70px;
    left: 1230px;
    border-radius: 50px;
    border: white;
    height: 20px;
    font-weight: bold;
    opacity: 80%;
  }

  .rightbutton:hover {
    cursor: pointer;
  }

  button {
    width: 80%;
  }

  @media (max-width: 1250px) {
  }

  @media (max-width: 768px) {
    transform: scale(1.1);
    margin-top: 20px;
    margin-bottom: -350px;
    
    .leftbutton {
      display: none;
    }

    .rightbutton {
      display: none;
    }
  }

  @media (max-width: 320px) {
  }
`;

export default MainContainer;

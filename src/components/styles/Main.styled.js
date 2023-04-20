import styled from "styled-components";
import mainphoto from "../../assets/mainphoto.jpg";

const MainContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #fff;
  height: 550px;
  padding: 0;
  justify-content: space-evenly;
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
`;

export default MainContainer;

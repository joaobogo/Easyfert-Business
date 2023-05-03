import styled from "styled-components";


const MainContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #fff;
  height: 11.25rem;
  padding: 0;
  justify-content: space-between;
  background: url(${(props) => props.bgimage}) no-repeat;
  background-size: 100vw;

  .leftbutton {
    position: relative;
    bottom: 50%;
    left: 10%;
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
    bottom: 50%;
    right: 10%;
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

  @media (min-width: 1000px) {
    height: 550px;

    .leftbutton {
      bottom: 70px;
      left: 25px;
    }

    .rightbutton {
      bottom: 70px;
      left: 65rem;
    }
  }

  @media (max-width: 768px) {
    transform: scale(1.1);
    

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

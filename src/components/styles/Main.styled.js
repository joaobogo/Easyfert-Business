import styled from "styled-components";

const buttonStyles = `
  position: relative;
  bottom: 50%;
  border-radius: 50px;
  border: white;
  height: 20px;
  font-weight: bold;
  opacity: 80%;
  cursor: pointer;
`;

const primaryColor = "#fff";
const buttonHeight = "20px";

const MainContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: ${primaryColor};
  height: 11.25rem;
  padding: 0;
  justify-content: space-between;
  background: url(${(props) => props.bgimage}) no-repeat;
  background-size: 100vw;

  .leftbutton,
  .rightbutton {
    ${buttonStyles}
    height: ${buttonHeight};
  }

  .leftbutton {
    left: 10%;
  }

  .rightbutton {
    right: 20%;
  }

  button {
    width: 80%;
  }

  @media (min-width: 1000px) {
    height: 550px;

    .leftbutton {
      bottom: 70px;
      left: 25px;
    }

    .rightbutton {
      bottom: 70px;
      left: 64rem;
    }
  }

  @media (max-width: 768px) {
    transform: scale(1.1);

    .leftbutton,
    .rightbutton {
      display: none;
    }
  }

  @media (max-width: 320px) {
  }
`;

export default MainContainer;
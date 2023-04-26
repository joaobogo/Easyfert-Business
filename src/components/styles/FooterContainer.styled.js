import styled from "styled-components";

const FooterContainer = styled.footer`
  background-color: #e6f0ee;
  height: 150px;
  display: flex;
  justify-content: space-evenly;
  box-shadow: 0 0 10px #b5d2cd;

  @media (max-width: 1250px) {
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    height: auto;
  }

  @media (max-width: 320px) {
  }
`;

export default FooterContainer;

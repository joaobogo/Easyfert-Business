import styled from "styled-components";

const NavbarContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 65px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: #e6f0ee;
  box-shadow: 0 0 20px #b5d2cd;
  
/* .iconlinks{
  margin-left: -200px;
} */

  @media screen and (max-width: 767px) {
    flex-direction: column;
    height: 150px;
    align-items: center;
  }
`;

export default NavbarContainer;

import styled from 'styled-components';


const NavbarContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background-color: #076a58;
  border-style: solid;
  border-color: #febc30;
  border-radius:  0px  0px 2px 2px ;
  height: 65px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  
  @media screen and (max-width:767px){
    flex-direction: column;
    height: 150px;
  align-items: center;
  }
`;

export default NavbarContainer
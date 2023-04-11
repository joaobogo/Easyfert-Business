import React from 'react'
import NavbarContainer from './styles/NavbarContainer.styled'
import SearchInput from './styles/SearchInput.styled'
import SocialMediaIcons from './styles/SocialMediaIcons.Styled'
import IconLink from './styles/IconLink.styled'
import { FaFacebook, FaInstagram, FaShoppingCart } from "react-icons/fa"
import Logo from './styles/Logo.styled'
import LogoImage from './styles/LogoImage.styled'
import Logoimg from '../assets/eflogominiwhite.png'
import SimpleDiv from './styles/SimpleDiv.styled'


const Header = () => {
  return (
    <NavbarContainer>
      <SimpleDiv><LogoImage src={Logoimg}></LogoImage>
        <Logo><a href='/'>EasyFert</a></Logo>
      </SimpleDiv>
      <SearchInput type="text" placeholder="O que você procura?" />
      <SocialMediaIcons>
        <IconLink href="#">
          <FaFacebook />
        </IconLink>
        <IconLink href="#">
          <FaInstagram />
        </IconLink>
        <IconLink href="/checkout">
          <FaShoppingCart />
        </IconLink>
      </SocialMediaIcons>
    </NavbarContainer>
  );
};

export default Header;
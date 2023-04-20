import React from 'react'
import NavbarContainer from './styles/NavbarContainer.styled'
import SocialMediaIcons from './styles/SocialMediaIcons.Styled'
import IconLink from './styles/IconLink.styled'
import { FaFacebook, FaInstagram, FaShoppingCart, FaUser } from "react-icons/fa"
import Logo from './styles/Logo.styled'
import LogoImage from './styles/LogoImage.styled'
import Logoimg from '../assets/eflogomini.png'
import SimpleDiv from './styles/SimpleDiv.styled'


const Header = () => {
  return (
    <NavbarContainer>
      <SimpleDiv><LogoImage src={Logoimg}></LogoImage>
        <Logo><a href='/'>EasyFert</a></Logo>
      </SimpleDiv>
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
        <IconLink href='/userprofile'>
          <FaUser/>
        </IconLink>
      </SocialMediaIcons>
    </NavbarContainer>
  );
};

export default Header;
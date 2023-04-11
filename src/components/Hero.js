import MainContainer from './styles/Main.styled'

import React from 'react';
import ButtonContainer from './styles/Buttonmain.styled';
import { Link } from 'react-router-dom';


function Hero() {

    return (
        <MainContainer>
            <ButtonContainer>
               <Link className='button' to='/about'> Sobre a Reno Nutrients / Tabela Posológica</Link>
            </ButtonContainer>
        </MainContainer>
    )
}

export default Hero
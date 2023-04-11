import React from 'react'
import LowfooterContainer from './styles/Lowfooter.styled'
import Row from './styles/Row.styled'
import mastercard from '../assets/mastercard.png'
import americanexpress from '../assets/americanexpress.png'
import visa from '../assets/visa.png'
import pix from '../assets/pix.png'
import correio from '../assets/correio.png'
import dhl from '../assets/dhl.png'


function Lowfooter() {
    return (
        <LowfooterContainer>
            <Row>
                <img src={mastercard} />
                <img src={visa} />
                <img src={americanexpress} />
                <img src={pix} />
                <span></span>
                <p>© Easyfert.Todos os direitos reservados.</p>
                <span></span>
                <img src={correio} />
                <img src={dhl} />
            </Row>


        </LowfooterContainer>

    )
}

export default Lowfooter
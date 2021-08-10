import React from 'react'
import { FooterContainer, FooterCopyright } from './FooterElemante'

const Footer = ({className}) => {
    return (
        <FooterContainer className={className}>
            <FooterCopyright>
                e-mail @ dani_tahir360@hotmail.com
            </FooterCopyright>
        </FooterContainer>
    )
}

export default Footer

import React from 'react'
import {ServicesContainer, ServicesService,CaroselServices,H2Services} from './ServicesElemants'
import htmlSLogo from '../../images/5847f5bdcef1014c0b5e489c.png'
import cssSLogo from '../../images/CSS3_logo_and_wordmark.svg.png'
import jsSLogo from '../../images/980ba07956ccfdf81b5060b1795cdcad.png'
import mySqlSLogo from '../../images/269-2693201_mysql-logo-circle-png.png'
import nodeJSSLogo from '../../images/unnamed.png'
import mongoDBSLogo from '../../images/mongodb-5-1175140.webp'
import reactSLogo from '../../images/React.webp'
import solidatySLogo from '../../images/Ethereum-ETH-icon.png'

const breakPoints = [
    {width: 1,itemsToShow:1},
    {width: 550,itemsToShow:2},
    {width: 768,itemsToShow:3},
]

const Services = ({className}) => {
    return (

        <ServicesContainer className={className} id='services'>

            <H2Services>services</H2Services>

                <CaroselServices breakPoints={breakPoints}>

                    <ServicesService  sImg={htmlSLogo} sTitle='HTML 5' sDiscreption='Expert'/>
                    <ServicesService  sImg={cssSLogo} sTitle='CSS 3' sDiscreption='Expert'/>
                    <ServicesService  sImg={jsSLogo} sTitle='JavaScript' sDiscreption='Expert'/>
                    <ServicesService  sImg={mySqlSLogo} sTitle='mySql' sDiscreption='intermidate'/>
                    <ServicesService  sImg={nodeJSSLogo} sTitle='NodeJS' sDiscreption='intermidate'/>
                    <ServicesService  sImg={mongoDBSLogo} sTitle='MongoDB' sDiscreption='intermidate'/>
                    <ServicesService  sImg={reactSLogo} sTitle='ReactJS' sDiscreption='intermidate'/>
                    <ServicesService  sImg={solidatySLogo} sTitle='Solidaty (Etherium Blockchain)' sDiscreption='Biggner'/>
                    <ServicesService  sImg={reactSLogo} sTitle='React Native' sDiscreption='Biggner'/>

                </CaroselServices>

        </ServicesContainer>
        
    )
}

export default Services

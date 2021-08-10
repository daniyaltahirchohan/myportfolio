import styled from 'styled-components'
import Service from './Service'
import servicesitbanner from '../../images/it-banner.jpg'
import Carousel from 'react-elastic-carousel'

export const ServiceContainer = styled.div`

    height: 300px;
    width: 200px;
    display: grid;
    grid-template-columns: repeat(1,auto);
    justify-content: center;
    background-color: rgba(69,69,69,0.8);

`

export const ServiceIcon = styled.img`

    height: 150px;
    width: 150px;
    justify-self: center;
    align-self: center;

`

export const ServiceTitle = styled.h3`

    font-family: Arial, Helvetica, sans-serif;
    font-size: 1em;
    font-weight: bold;
    color: #cacaca;
    text-align: center;

`

export const ServiceDiscription = styled.p`

    font-family: Arial, Helvetica, sans-serif;
    font-size: 0.7em;
    color: #fff;
    text-align: center;

`

export const ServicesContainer = styled.div`

    width: 90%;
    background-image: url(${servicesitbanner});
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    background-attachment: fixed;
    padding: 10px 5%;
    display: grid;
    grid-template-columns: repeat(1,auto);

`

export const H2Services = styled.h2`

    font-family: Arial, Helvetica, sans-serif;
    font-size: 1.5em;
    font-weight: bold;
    color: #cacaca;
    text-align: start;
    text-transform: uppercase;
    padding: 5px;

`


export const CaroselServices = styled(Carousel)`

    width: 100%;

`


export const ServicesService = styled(Service)`

    align-self: center;
    justify-self: center;
    border: 2px #000 solid;

`
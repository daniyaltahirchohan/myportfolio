import styled from 'styled-components'
import bannerImg from '../../images/website-development.png'

export const BannerContainer = styled.div`

    display: grid;
    grid-template-columns: repeat(1,auto);
    background-image: url(${bannerImg});
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    background-attachment: fixed;
    border: 2px #cacaca solid;
    padding: 20%;
    margin: 60px 0 0 0;

    @media screen and (max-width: 480px){
        padding: 15%;
    }

    @media screen and (max-width: 360px){
        padding: 10%;
    }

`

export const H1Banner = styled.h1`

    font-family: Arial, Helvetica, sans-serif;
    font-size: 2em;
    color: #e1e1e1;
    text-transform: uppercase;
    text-align: center;
    text-shadow: 0.06em 0.06em #e80000;

    @media screen and (max-width: 480px){
        font-size: 1.6em;
        text-shadow: 0.05em 0.05em #e80000; 
    }

    @media screen and (max-width: 360px){
        font-size: 1.3em;
        text-shadow: 0.006em 0.04em #e80000;
    }


`

export const PBanner = styled.p`

    font-family: Arial, Helvetica, sans-serif;
    font-size: 1em;
    color: #fff;
    text-align: center;
    background-color: rgb( 92, 92, 92 , 0.5);

    @media screen and (max-width: 480px){
        font-size: 0.8em;
    }

    @media screen and (max-width: 360px){
        font-size: 0.5em;
    }

`


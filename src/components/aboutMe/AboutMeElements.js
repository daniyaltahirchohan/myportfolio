import styled from 'styled-components'

export const AboutMeContainer = styled.div`

    display: grid;
    grid-template-columns: 30% 70%;
    padding: 10%;
    background-color: #121212;
    grid-gap: 10px;

    @media screen and (max-width: 688px){
        grid-template-columns: repeat(1,auto);
        justify-content: center;
        grid-template-rows: repeat(2,auto);
    }

`
export const AboutMeDP = styled.img`

    height: 200px;
    width: 200px;
    border-radius: 200px;
    align-self: center;

    @media screen and (max-width: 951px){
        height:150px;
        width:150px;
        border-radius: 150px;
        justify-self: center;
            @media screen and (max-width: 463px){
            height:100px;
            width:100px;
            border-radius: 100px;
            justify-self: center;
            }
    }

`

export const AboutMeDiscription = styled.p`

    font-family: Arial, Helvetica, sans-serif;
    font-size: 1em;
    color: #cacaca;
    text-align: center;
    align-self: center;

    @media screen and (max-width: 463px){
        font-size: 0.7em;

        @media screen and (max-width: 463px){
            font-size: 0.5em;
        }
    }

`

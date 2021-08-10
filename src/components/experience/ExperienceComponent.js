import styled from 'styled-components'
import Experience from './Experience'

export const ExperienceContainer = styled.div`

    display: grid;
    grid-template-columns: repeat(1,auto);
    grid-template-rows: repeat(2,auto);
    border-bottom: 1px #cacaca dotted;
    
`

export const ExperienceTitle = styled.h3`

font-family: Arial, Helvetica, sans-serif;
font-size: 1em;
font-weight: bold;
color: #cacaca;
text-align: center;

`

export const ExperienceDiscreption = styled.p`

font-family: Arial, Helvetica, sans-serif;
font-size: 0.7em;
color: #fff;
text-align: center;

`
export const ExperiencesContainer = styled.div`

    display: grid;
    grid-template-columns: repeat(1,auto);
    grid-template-rows: auto;
    background-color: #121212;


`

export const OuterExperience = styled(Experience)`

    padding: 20%;
    justify-self: center;

`

export const H2Experiences = styled.h2`

    font-family: Arial, Helvetica, sans-serif;
    font-size: 1.5em;
    font-weight: bold;
    color: #cacaca;
    text-align: start;
    text-transform: uppercase;
    padding: 5px 50px;

`
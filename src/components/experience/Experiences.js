import React from 'react'
import {ExperiencesContainer, H2Experiences, OuterExperience } from './ExperienceComponent'

const Experiences = ({className}) => {
    return (

        <ExperiencesContainer className={className} id='experiences'>

            <H2Experiences>experiences</H2Experiences>

            <OuterExperience
            eYear='2016' 
            eDisp='From 2011 working on HTML and CSS'
            />

            <OuterExperience 
            eYear='2017' 
            eDisp='From 2017 working on JavaScript' 
            />

            <OuterExperience 
            eYear='2017' 
            eDisp='From 2017 working on JavaScript' 
            />

            <OuterExperience 
            eYear='2020' 
            eDisp='From 2020 working on reactjs' 
            />

            
        </ExperiencesContainer>
    
    )
}

export default Experiences

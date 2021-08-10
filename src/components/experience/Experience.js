import React from 'react'
import { ExperienceContainer, ExperienceDiscreption, ExperienceTitle } from './ExperienceComponent'

const Experience = (
    props,
    {className}
) => {
    return (
        <ExperienceContainer className={className}>
            <ExperienceTitle>{props.eYear}</ExperienceTitle>
            <ExperienceDiscreption>{props.eDisp}</ExperienceDiscreption>
        </ExperienceContainer>
    )
}

export default Experience

import React from 'react'
import {ServiceContainer,
        ServiceIcon,
        ServiceTitle,
        ServiceDiscription} from './ServicesElemants'

const Service = (
    props,
    {className}
) => {
    return (
        
        <ServiceContainer className={className}>

            <ServiceIcon src={props.sImg} alt='' />
            <ServiceTitle>{props.sTitle}</ServiceTitle>
            <ServiceDiscription>{props.sDiscreption}</ServiceDiscription>

        </ServiceContainer>
       
    )
}

export default Service

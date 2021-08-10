import React from 'react'
import {ContactsContainer, OuterContSocialContainer, OuterFormContainerCont} from './ContactsElaments'

const Contacts = ({className}) => {
    return (
        <ContactsContainer className={className} id='contacts'>
            <OuterFormContainerCont />
            <OuterContSocialContainer />
        </ContactsContainer>
    )
}

export default Contacts

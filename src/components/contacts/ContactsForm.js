import React from 'react'
import { ContactSubmitBTN, ContFormContainer, FormInput, FormLabel } from './ContactsElaments'

const ContactsForm = ({className}) => {
    return (
        <ContFormContainer className={className}>

            <FormLabel>Name</FormLabel>
            <FormInput type='text' name='name' required/>

            <FormLabel>E-mail</FormLabel>
            <FormInput type='text' name='E-mail' required/>

            <FormLabel>Massage</FormLabel>
            <FormInput type='text' name='Massage' required/>

            <ContactSubmitBTN>Submit</ContactSubmitBTN>

        </ContFormContainer>
    )
}

export default ContactsForm

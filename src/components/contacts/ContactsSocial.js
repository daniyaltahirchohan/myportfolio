import React from 'react'
import { ContSocialContainer, SocialMediaIcomContact } from './ContactsElaments'

const ContactsSocial = ({className}) => {
    return (
        <ContSocialContainer className={className}>
            <SocialMediaIcomContact url="https://www.facebook.com/danychohan.dc"/>
            <SocialMediaIcomContact url="https://www.instagram.com/daniyal.tahir.chohan/"/>
            <SocialMediaIcomContact url="https://www.linkedin.com/in/danny-c-1a9126186/"/>
            <SocialMediaIcomContact url="https://wa.link/ndb6gx"/>
        </ContSocialContainer>
    )
}

export default ContactsSocial

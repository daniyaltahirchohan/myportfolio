import styled from 'styled-components'
import ContactsForm from './ContactsForm'
import { SocialIcon } from 'react-social-icons';
import ContactsSocial from './ContactsSocial'

export const ContactsContainer = styled.div`

    width: 95%;
    display: grid;
    grid-template-columns: repeat(2,50%);
    background-color: #121212;
    padding: 2.5%;

    @media screen and (max-width: 480px){

        grid-template-columns: repeat(1,100%);
        grid-template-rows: repeat(2,1fr);
        

    }

`

export const ContFormContainer = styled.div`

    display: grid;
    grid-template-columns: repeat(1,auto);
    grid-template-rows: 1fr 2fr 1fr 2fr 1fr 5fr 1fr;

`

export const FormLabel = styled.label`

    font-family: Arial, Helvetica, sans-serif;
    font-size: 1em;
    font-weight: bold;
    color: #cacaca;

`

export const FormInput = styled.input`

   margin-bottom: 20px;

`

export const ContactSubmitBTN = styled.button`

    background-color: #cacaca;
    color: #121212;
    width: auto;
    border-radius: 5px;

    &:hover{
     background-color: #e80000;
     border-radius: 10px;
     color: #fff;
   }

`

export const OuterFormContainerCont = styled(ContactsForm)`

    border-right: 1px #cacaca dotted;
    padding: 10px;

    @media screen and (max-width: 480px){

    border-right: 0px;

    }

`

export const ContSocialContainer = styled.div`

   display: grid;
   grid-template-columns: repeat(2,1fr);
   grid-template-rows: repeat(2,1fr);

`

export const SocialMediaIcomContact = styled(SocialIcon)`

   align-self: center;
   justify-self: center;
   padding: 20;

`

export const OuterContSocialContainer = styled(ContactsSocial)`

   padding: 0px;

   @media screen and (max-width: 480px){

        width: 100%;
        height: 500px;


    }

`
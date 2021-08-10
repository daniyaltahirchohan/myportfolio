import styled from 'styled-components'
import { BsList } from "react-icons/bs"
import { AiOutlineClose } from "react-icons/ai";
import {Link} from 'react-scroll'
import MainNav from './MainNav'


export const NavBarContainer = styled.div`
    height: auto;
    width: 100%;
    background-color: #121212;
    display: grid;
    grid-template-columns: 20% 80%;
    position: fixed;
    border-bottom: 1px #cacaca dotted;
    z-index: 2;
    


    @media screen and (max-width: 848px){
        
        grid-template-columns: 85% 15%;
    
    }
`

export const LogoImgNavBar = styled.img`
    height: 50px;
    margin: 5px 25px;
    @media screen and (max-width: 400px){
        height: 35px;
        margin: 5px 5px;
    }
`

export const MoboNavButtonOpner = styled(BsList)`
    height: 50px;
    width: 50px;
    justify-content: end;
    align-self: center;
    display: none;

    @media screen and (max-width: 848px){
        display: block;

        @media screen and (max-width: 400px){
        height: 35px;
        width: 35px;
        }

    }
`

export const MoboNavButtonCloser = styled(AiOutlineClose)`
    height: 50px;
    width: 50px;
    justify-content: end;
    align-self: center;
    display: none;

    @media screen and (max-width: 848px){
        display: block;

        @media screen and (max-width: 400px){
        height: 35px;
        width: 35px;
        }

    }
`

export const MainNavContainer = styled.div`
        margin: 0;
`

export const NavbarNavContainer = styled.nav`
    float: right;
    margin: 0 20px;
    @media screen and (max-width: 848px){
      float: none;
      clear: both;
      content: '';
      margin: 0px;
     
    }
`

export const NavbarULContainer = styled.ul`
   display: grid;
   grid-template-columns: repeat(5,auto);
   grid-gap:20px;
   @media screen and (max-width: 848px){
       grid-template-columns: repeat(1,auto);
   }
`

export const NavbarLIContainer = styled.li`
   list-style: none;
   color: #cacaca;
   cursor: pointer;
   text-transform: uppercase;
   font-family: Arial, Helvetica, sans-serif;
   font-size: 1em;
   font-weight: bold;

   @media screen and (max-width: 848px){
       transform: translate(-19%);
       display: ${props => props.isOpenLi};
       text-align: center;
   }

   &:hover{
     color: #e80000;
     font-size: 1.1em;
   }
`
export const NavbarLinkContainer = styled(Link)`
   margin: 0;
`

export const NavbarOuterContainer = styled(MainNav)`
        display: block;
   @media screen and (max-width: 848px){
       
       grid-column-start: 1;
       grid-column-end: 3;
       justify-self: center;
       display: ${props => props.isOpen};
   }
`
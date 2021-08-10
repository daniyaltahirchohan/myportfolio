/* eslint-disable jsx-a11y/img-redundant-alt */
import React,{useState} from 'react'
import myLogo from '../../images/Daniyal Tahir-logo.png'


import {NavBarContainer,
        LogoImgNavBar,
        MoboNavButtonOpner,
        MoboNavButtonCloser,
        NavbarOuterContainer} from './NavbarElements'


        

const NavBar = () => {

    const [moboNavOpen, setmoboNavOpen] = useState(false)
    const [moboNavOpenStyle, setmoboNavOpenStyle] = useState('none')

    const moboNaveOpener = () => {

        if(moboNavOpen === false){
            setmoboNavOpen(true)
            setmoboNavOpenStyle('block')

            
        }else{
            setmoboNavOpen(false)
            setmoboNavOpenStyle('none')
        }
    }

    return (
        <NavBarContainer>

        <LogoImgNavBar src={myLogo} />

        { moboNavOpen ? 
        <MoboNavButtonCloser color='#fff' onClick={moboNaveOpener} />
        :<MoboNavButtonOpner color='#fff' onClick={moboNaveOpener}/> }

        <NavbarOuterContainer  isOpen={moboNavOpenStyle} isHiddenLi={'none'}/>


      
        
        </NavBarContainer>
    )
}

export default NavBar


import React from 'react'
import {MainNavContainer,
        NavbarNavContainer,
        NavbarULContainer,
        NavbarLIContainer,
        NavbarLinkContainer} from './NavbarElements'


const MainNav = ({className}) => {
    return (
        <MainNavContainer className={className}>
            
            <NavbarNavContainer>

                <NavbarULContainer>

                    <NavbarLIContainer>
                        <NavbarLinkContainer
                        activeClass="active"
                        to="home"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}>home</NavbarLinkContainer>
                    </NavbarLIContainer>

                    <NavbarLIContainer>
                        <NavbarLinkContainer
                        activeClass="active"
                        to="aboutme"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}>about me</NavbarLinkContainer>
                    </NavbarLIContainer>

                    <NavbarLIContainer>
                        <NavbarLinkContainer
                        activeClass="active"
                        to="services"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}>services</NavbarLinkContainer>
                    </NavbarLIContainer>

                    <NavbarLIContainer>
                        <NavbarLinkContainer
                        activeClass="active"
                        to="experiences"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}>experience</NavbarLinkContainer>
                    </NavbarLIContainer>

                    <NavbarLIContainer>
                        <NavbarLinkContainer
                        activeClass="active"
                        to="contacts"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}>contacts</NavbarLinkContainer>
                    </NavbarLIContainer>

                </NavbarULContainer>
                    

               
                
            </NavbarNavContainer>
            

            </MainNavContainer>
        
    )
}

export default MainNav



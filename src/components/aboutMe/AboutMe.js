import React from 'react'
import {AboutMeContainer,
        AboutMeDP,
        AboutMeDiscription} from './AboutMeElements'
import dpIMG from '../../images/20210604_230406.jpg'

const AboutMe = ({className}) => {
    return (
        <AboutMeContainer className={className} id='aboutme'>
            <AboutMeDP src={dpIMG} />
            <AboutMeDiscription>
                I'm a React.js developer can any project realted to ReactJS,Node.js,mongoDB,JavaScript,HTML,CSS. I have done many project locally. The education backgroung of mine is, I have a 4 year BS Degree in Software Engineering.
            </AboutMeDiscription>
        </AboutMeContainer>
    )
}

export default AboutMe

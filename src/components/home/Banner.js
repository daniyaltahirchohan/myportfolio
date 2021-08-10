import React from 'react'
import {BannerContainer,
       H1Banner,
       PBanner} from './BannerElements'

const Banner = ({className}) => {
    return (
        <BannerContainer className={className} id='home'>
            <H1Banner>web developer</H1Banner>
            <PBanner>Expert in ReactJs</PBanner>
        </BannerContainer>
    )
}

export default Banner

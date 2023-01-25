import React from "react"
import styled from "styled-components"
import profilePic from "../img/profile.jpg"
import border from "../img/border.svg"
import handwritten from '../img/handwritten.svg'

// img
import hero from "../img/hero.svg"

const HeroSection = () => {

    return (
        <Head>
            <Intro>

                <Pic>
                    <Border />
                    <Profile />
                </Pic>

                <Handwritten src={handwritten} alt="" />
            </Intro>
        </Head>
    )
}

export default HeroSection

// Style
const Head = styled.header`
    height: 90vh;
    width: 100vw;

    display: flex;
    justify-content: center;
    align-items: center;

    background-image: url(${hero});
    background-position: 50% 100%;
    background-size: cover;
`

const Intro = styled.div`
    width: 800px;
    position: relative;
    bottom: 60px;

    display: flex;
    align-items: center;
    justify-content: center;
    color: #0f0f0f;

    & > h1 {
        font-size: 54px;
        margin: 0;
    }

    @media (max-width: 670px) {
        flex-direction: column;
    }
`

const Pic = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;

    & > div {
        background-position: center;
        background-repeat: no-repeat;
    }
`

const Border = styled.div`
    position: absolute;
    background-image: url(${border});
    height: 268px;
    width: 268px;
`

const Profile = styled.div`
    background-image: url(${profilePic});
    background-size: cover;
    border-radius: 50%;
    height: 210px;
    width: 210px;
`

const Handwritten = styled.img`
    height: 100px;
    margin-left: 60px;

    @media (max-width: 670px) {
        margin: 0;
    }
`

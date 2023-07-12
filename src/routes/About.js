import React from "react"
import Navbar from "../components/Navbar/Navbar"
import logo from '../assets/Frame 15.svg'
import Footer from "../components/Footer/Footer"
import AboutMe from "../components/AboutMe/AboutMe"


function AboutPage(){
    return (
        <>
            < Navbar logo={logo} colorBg='white'  fontColor='black'  />
            <AboutMe/>
            <Footer/>
        </>
    )
}

export default AboutPage
import React from "react"
import Navbar from "../components/Navbar/Navbar"
import HomeHeading from "../components/HomeHeading/HomeHeading"
import HomeProjects from "../components/HomeProjects/HomeProjects"
import logo from '../assets/Group 1.svg'
import Footer from "../components/Footer/Footer"



function HomePage(){
    return (
        <>
            < Navbar logo={logo} colorBg='#1b1b1b' fontColor='white' />
            < HomeHeading />
            <HomeProjects/>
            <Footer/>
        </>
    )
}

export default HomePage
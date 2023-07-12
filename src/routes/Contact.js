import React from "react"
import Navbar from "../components/Navbar/Navbar"
import logo from '../assets/Frame 15.svg'
import Footer from "../components/Footer/Footer"


function ContactPage(){
    return (
        <>
            < Navbar logo={logo} colorBg='white'  fontColor='black'  />
            <Footer/>
        </>
    )
}

export default ContactPage
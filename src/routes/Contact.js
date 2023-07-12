import React from "react"
import Navbar from "../components/Navbar/Navbar"
import logo from '../assets/Frame 15.svg'
import ContactMe from "../components/ContactMe/ContactMe"


function ContactPage(){
    return (
        <>
            < Navbar logo={logo} colorBg='white'  fontColor='black'  />
            <ContactMe/>
        </>
    )
}

export default ContactPage
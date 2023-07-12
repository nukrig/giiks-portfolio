import React from "react"
import Navbar from "../components/Navbar/Navbar"
import logo from '../assets/Frame 15.svg'
import Footer from "../components/Footer/Footer"
import WorkProjects from "../components/WorkProjects/WorkProjects"


function WorkPage(){
    return (
        <>
            < Navbar logo={logo} colorBg='white'  fontColor='black'  />
            <WorkProjects/>
            <Footer/>
        </>
    )
}

export default WorkPage
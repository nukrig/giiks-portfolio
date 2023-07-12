import React, { useState } from "react"
import './NavbarStyles.css'
import { Link } from "react-router-dom"
import {FaBars,FaTimes} from 'react-icons/fa'

function Navbar(props){
    const [color,setColor]=useState(false)
    const[click,setClick]=useState(false)

    const changeColor = ()=>{
        if(window.scrollY >= 800){
            setColor(true)
        }else{
            setColor(false)
        }
    }
    window.addEventListener('scroll', changeColor)

    const handleClick = ()=>{
        setClick(!click)
    }

    const  colorBg = props.colorBg
    const logo = props.logo
    const fontColor = props.fontColor
    return (
        <div style={{backgroundColor:`${colorBg}`}} className={color ? 'header header-bg' : 'header'}>
            <Link  to='/'>
                <img className="logo" src={logo} alt="logo" />
            </Link>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}  >
                <li className={fontColor=='white' ? 'white' : 'black'}><Link to='/Work' > Work </Link></li>
                <li className={fontColor=='white' ? 'white' : 'black'}><Link to='/About' > About </Link></li>
                <li className={fontColor=='white' ? 'white' : 'black'}><Link to='/Contact' > Contact </Link></li>
            </ul>
            <div className="burger" onClick={handleClick} >
                {click ? (<FaTimes size={20} style={{color:`${fontColor}`}} />) 
                : (<FaBars size={20} style={{color:`${fontColor}`}} />)}
                
                
            </div>
        </div>
    )
}

export default Navbar
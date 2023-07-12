import React from "react"
import './AboutMe.css'
import downArrow from '../../assets/down.png'
import profile from '../../assets/profile.jpg'

function AboutMe(){
    return (
        <>
            <div className="about">
                <div className="leftInfo">
                    <h1>Giorgi Karichashvili</h1>
                    <p>23 Years old experienced UI/UX Designer based in Tbilisi,Georgia. 2.5
                        Year working experience as a UI/UX Designer. I love my field of expertise, 
                        I am detail oriented and I do everything with enthusiasm. I like to face 
                        new challenges, now I am open to <span style={{color:'black',fontWeight:'bold'}}>all offers.</span> 
                    </p>
                    <ul style={{listStyle:'square'}}>
                        <li>Experience collaborating with team of developers.</li>
                        <li>Experience mentoring with design interns.</li>
                        <li>Experience in fav product design tools like: 
                            <span style={{color:'#E86F3B'}}>Figma, </span>
                            <span  style={{color:'#0283CCEF'}}>Framer, </span>
                            <span  style={{color:'#AB35A7'}}>Adobe XD</span>
                        </li>
                        <li>Experience basics of HTML.</li>
                    </ul>
                    <img className="leftImage" src={downArrow} alt="logo"/>
                </div>
                <div className="profileDiv">
                    <img className="profile" src={profile} alt="ProfilePicture"/>
                </div>
            </div>
                <div style={{padding:'0 180px'}}>
                    <div style={{height:'2px',width:'100%',backgroundColor:'#000'}}></div>
                </div>
                <div className="aboutFinish">
                    <h1>Feel free to get in touch</h1>
                    <div>
                        <h6>giorgi.karichashvili.1@btu.edu.ge</h6>
                        <a href="https://read.cv/giiikss?fbclid=IwAR3LfuelMMVHancVJV1rJyhALwTsWqzksOJFIePNjTWA6BZsurIRX6Tx6GQ" target="blank"
                        >View Resume<img src={downArrow} alt="arrow"/></a>
                    </div>
                </div>
        </>
    )
}

export default AboutMe
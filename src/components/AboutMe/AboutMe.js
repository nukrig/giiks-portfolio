import React from "react"
import './AboutMe.css'

function AboutMe(){
    return (
            <div className="about">
                <div className="leftBlock">
                    <h1>Giorgi Karichashvili</h1>
                    <p>23 Years old experienced UI/UX Designer based in Tbilisi,Georgia. 2.5
                         Year working experience as a UI/UX Designer. I love my field of expertise, 
                         I am detail oriented and I do everything with enthusiasm. I like to face 
                         new challenges, now I am open to all offers.
                    </p>
                    <ul>
                        <li>Experience collaborating with team of developers.</li>
                        <li>Experience mentoring with design interns.</li>
                        <li>Experience in fav product design tools like: 
                            <span style={{color:'#E86F3B'}}>Figma, </span>
                            <span  style={{color:'#0283CCEF'}}>Framer, </span>
                            <span  style={{color:'#AB35A7'}}>Adobe XD</span>
                        </li>
                        <li>Experience basics of HTML.</li>
                    </ul>
                </div>
                <div className="rightBlock">

                </div>
            </div>
    )
}

export default AboutMe
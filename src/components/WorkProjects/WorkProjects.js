import React from "react"
import './WorkProjects.css'
import MyProject from "../MyProject/MyProject"
import downArrow from '../../assets/down.png'
import project4 from '../../assets/project4.svg'
import project5 from '../../assets/project5.svg'
import project6 from '../../assets/project6.svg'
import project7 from '../../assets/project7.svg'

function WorkProjects(){
    return (
        <>
            <div className="workProjects">
                    <p className="workParagraph">Don’t hesitate to scroll down and browse my 
                        <span className="span1"> featured projects. </span>  
                        By clicking the button you can go to the website link and browse the already launched websites 
                        <span className="span2"> designed for users by me. </span> 
                    </p>
                    <img className="down"  src={downArrow} alt="DOWN" />
                
                {/* PROOJECT 4 */}
                <MyProject
                    num='04 / '
                    heading = 'Stateless information portal'
                    paragraph='The portal about statelessness is a unique platform that combines all the 
                    necessary information about statelessness in one space.'
                    more = 'www.stateless.ge'
                    img = {project4}
                    link = 'www.stateless.ge'
                />
                {/* PROOJECT 5 */}
                <MyProject
                    num='05 / '
                    heading = 'Investment portal for the administration of the State Trustee of Samegrelo-Zemo Svaneti.'
                    paragraph='The web page was developed within the Fostering Regional and Local Development in Georgia'
                    more = 'http://www.investinsamegrelo.ge'
                    img = {project5}
                    link = 'http://www.investinsamegrelo.ge'
                />
                {/* PROOJECT 6 */}
                <MyProject
                    num='06 / '
                    heading = 'Georgian Laboratory Association (GeLab)'
                    paragraph='was established in 2013 to promote the sustainable development of laboratory infrastructure 
                    in Georgia in order to achieve their international recognition (accreditation) and ensure the long-term
                     maintenance of this status.'
                    more = 'https://gelab.org.ge/en'
                    img = {project6}
                    link = 'https://gelab.org.ge/en'
                    />
                {/* PROOJECT 7 */}
                <MyProject
                    num='07 / '
                    heading = 'Website design for ALTE University'
                    paragraph='Alte University is a fully accredited higher education institution with 20 years of experience and history in the Georgian educational sphere, which unites more than 2,100 students from 17 countries at 5 schools.

                    A complex and large-scale project where I gained a lot of experience'
                    more = 'Comming soon...'
                    img = {project7}
                    link = 'https://grateful-guardrails-225933.framer.app/Contact-Me'
                    />
                <div className="workDiv">
                    <h6> Thanks for your interest! These projects are only part of my work 👆🏻 </h6>
                    <p> <a href="mailto:giorgi.karichashvili.1@btu.edu.ge">Message to me</a> and let's 
                    create something cooool <span> together!</span> </p>
                </div>
            </div>
        </>
    )
}

export default WorkProjects



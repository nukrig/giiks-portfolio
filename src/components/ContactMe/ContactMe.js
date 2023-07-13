import React from "react"
import './ContactMe.css'
import downArrow from '../../assets/down.png'
import dribble from '../../assets/dribble.svg'
import behance from '../../assets/behance.svg'
import linkedin from '../../assets/linkedin.svg'
import instagram from '../../assets/instagram.svg'

function ContactMe(){
    return (
        <>
            <div className="contact">
                <h1>Connect me with social media 🚀</h1>
                <div className="socialDiv">
                    {/* DRIBBBLE */}
                    <a href="https://dribbble.com/Giiikss?fbclid=IwAR24qAPwwuo6TIcjVCa46CGpMeIfWUrVH6DIvWnJvj_jHtb4EMyiHbf4sGk" target="blank">
                        <div className="box dribbble">
                            Dribbble
                            <img className="socialLogo" src={dribble} alt="dribbble"/>
                        </div>
                    </a>
                    {/* BEHANCE */}
                    <a href="https://www.behance.net/giorgikaricha?fbclid=IwAR2bcTfm2OzKqF0ADC7xK-fkd4oKGOsE1qogUx4xlkgms-zJkbN5ZauA3Io" target="blank">
                        <div className="box behance">
                            Behance
                            <img className="socialLogo" src={behance} alt="Behance"/>
                        </div>
                    </a>
                    {/* LINKEDIN */}
                    <a href="https://www.linkedin.com/in/giorgi-karichashvili-48797521b/?fbclid=IwAR2aI9ZkZ46SL7y41w1RB5bDlWMrgz5AWKfLRuWBrbq8KyGN9vx79hZ7ctQ" target="blank">
                        <div className="box linkedin">
                            Linked In
                            <img className="socialLogo" src={linkedin} alt="linkedin"/>
                        </div>
                    </a>
                    {/* INSTAGRAM */}
                    <a href="https://www.instagram.com/giiikss/?fbclid=IwAR2bMx389mKaP5Ru_6PC8_GMj9qe9_8tcPVej4hEreA7isoFxj60WIiXU-c" target="blank">
                        <div className="box instagram">
                        Instagram
                            <img className="socialLogo" src={instagram} alt="instagram"/>
                        </div>
                    </a>
                </div>
            </div>
                <div className="contactHr">
                    <div style={{height:'2px',width:'100%',backgroundColor:'#000'}}></div>
                </div>
                <div className="contactFinish">
                    <h1>Do you have a project Idea?</h1>
                    <div>
                        <h6>giorgi.karichashvili.1@btu.edu.ge</h6>
                        <a href="https://read.cv/giiikss?fbclid=IwAR3LfuelMMVHancVJV1rJyhALwTsWqzksOJFIePNjTWA6BZsurIRX6Tx6GQ" target="blank">
                            View Resume<img src={downArrow} alt="arrow"/></a>
                    </div>
                </div>
        </>
    )
}

export default ContactMe
import React from "react"
import './Footer.css'

function Footer(){
    return (
            <div className="footerDiv">
                <h5>Giorgi Karichashvili  -  2023</h5>
                <ul>
                    <li> <a href="https://www.instagram.com/giiikss/?fbclid=IwAR2bMx389mKaP5Ru_6PC8_GMj9qe9_8tcPVej4hEreA7isoFxj60WIiXU-c"  style={{color:'#AB35A7'}} target="blank">Instagram</a> </li>
                    <li> <a href="https://dribbble.com/Giiikss?fbclid=IwAR24qAPwwuo6TIcjVCa46CGpMeIfWUrVH6DIvWnJvj_jHtb4EMyiHbf4sGk"  style={{color:'#EA4C89'}} target="blank">Dribbble</a> </li>
                    <li> <a href="https://www.behance.net/giorgikaricha?fbclid=IwAR2bcTfm2OzKqF0ADC7xK-fkd4oKGOsE1qogUx4xlkgms-zJkbN5ZauA3Io" style={{color:'#053EFF'}} target="blank">Behance</a></li>
                    <li> <a href="https://www.linkedin.com/in/giorgi-karichashvili-48797521b/?fbclid=IwAR2aI9ZkZ46SL7y41w1RB5bDlWMrgz5AWKfLRuWBrbq8KyGN9vx79hZ7ctQ"  style={{color:'#4467AD'}} target="blank">LinkedIn</a></li>
                </ul>
            </div>
    )
}

export default Footer
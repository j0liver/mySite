import React from 'react'
import { FaRobot } from 'react-icons/fa'
import { useHistory, Link } from 'react-router-dom'


//proifle pic
import pic from '../imgs/profile.png'


//resume
import resume from '../resume/JosephOliver2.docx'

const About = () => {
    const history = useHistory();
    
    return (
        <section className='about'>
            <section className='aboutSection'>
                <div className='imgContainer'>
                    <img src={pic} alt=""/>
                </div>
                <p>Full Stack Devleoper with a passion for learning new tech. Whenever im not coding or reading about tech i like to play basketball! Currently based in Houston, Tx</p>
                <div>
                <a href='https://docs.google.com/document/d/1wq7oPocit9DsYx2ACgdKyQ8-LW-hM3LYFf0LPPTbXnE/edit?usp=sharing' target="_blank">
                    <button>Resume</button>
                </a>
                <button onClick={()=>{history.push('/contact')}}>Messsage</button>
               </div>
            </section>
            
            <section className='skillsSection'>
             
                <h2>Skills:</h2>
                <ul>
                    <li>Html5</li>
                    <li>CSS3</li>
                    <li>JavaScript</li>
                    <li>React/Redux</li>
                    <li>Node/Express</li>
                    <li>PostgreSql</li>
                </ul>
                
            </section>
        </section>
    )
}

export default About
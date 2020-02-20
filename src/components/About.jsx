import React from 'react'
import { FaRobot } from 'react-icons/fa'

// icons
import  html5 from '../imgs/HTML5.svg'
import redux  from '../imgs/Redux.png'
import css3 from '../imgs/CSS3_logo_and_wordmark.svg'
import bootstrap from '../imgs/bootstrap.png'
import node from '../imgs/node.png'
import postgresql from '../imgs/pgSql.png'
import reactLogo from '../../src/logo.svg'
import graphql from '../imgs/GraphQL_Logo.png'
import prisma from '../imgs/prisma-2.svg'
import docker from '../imgs/docker.svg'

const About = () => {

    return (
        <section className='about'>
            <section className='aboutSection'>
                <div>
                    <FaRobot />
                </div>
                <p>Hi, I am a fullStack Javascript Devleoper with a passion for Learning new tech Currently based in Houston, Tx  </p>
            </section>
            <section className='skillsSection'>
                <h2>Skills</h2>
                <div>
                    
                        <div className='imgContainer'>
                            <img src={html5} />
                        </div>
                        <div className='imgContainer'>
                            <img src={css3} alt="css3"/>
                        </div>
                        <div className='imgContainer'>
                            <img src={bootstrap} alt="boostrap"/>
                        </div>
                        <div className='imgContainer'>
                            <img src={reactLogo} alt=""/>
                        </div>
                        <div className='imgContainer'>
                            <img src={redux} alt=""/>
                        </div>
                        <div className='imgContainer'>
                            <img src={node} alt=""/>
                        </div>
                        <div className='imgContainer'>
                            <img src={postgresql} alt=""/>
                        </div>
                        <div className='imgContainer'>
                            <img src={graphql} alt=""/>
                        </div>
                        <div className='imgContainer'>
                            <img src={prisma} alt=""/>
                        </div>
                        <div className='imgContainer'>
                            <img src={docker} alt=""/>
                        </div>
                       
                        
                        
                        
                        
                        
                    
                </div>
            </section>
        </section>
    )
}

export default About
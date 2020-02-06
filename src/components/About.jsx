import React from 'react'
import { FaRobot } from 'react-icons/fa'

// icons
import  html5 from '../imgs/HTML5.svg'
import redux  from '../imgs/Redux.png'
import css3 from '../imgs/CSS3_logo_and_wordmark.svg'
import bootstrap from '../imgs/bootstrap-svg-vector-3.png'
import node from '../imgs/nodeIcon.jpg'
import postgresql from '../imgs/Postgresql_elephant.svg'
import reactLogo from '../../src/logo.svg'
import graphql from '../imgs/GraphQL_Logo.png'
import prisma from '../imgs/prisma.png'
import docker from '../imgs/docker.svg'

const About = () => {

    return (
        <section className='about'>
            <section className='imgSection'>
                <div>
                    <FaRobot />
                </div>
                <p>FullStack JavaScript Devolper with a passion for learning new Tech</p>
            </section>
            <section className='skillsSection'>
                <h2>Skills</h2>
                <div>
                    <div>
                        {/* <Redux /> */}
                        <img src={html5} />
                        {/* <img src={redux} alt=""/> */}
                        <img src={css3} alt=""/>
                        <img src={bootstrap} alt=""/>
                        <img src={node} alt=""/>
                        <img src={postgresql} alt=""/>
                        <img src={reactLogo} alt=""/>
                        <img src={graphql} alt=""/>
                        <img src={prisma} alt=""/>
                        <img src={docker} alt=""/>
                    </div>
                </div>
            </section>
        </section>
    )
}

export default About
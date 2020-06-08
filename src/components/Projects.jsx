import React from 'react'
import park from '../imgs/park.png'
import hub from '../imgs/quality.png'
import guidr from '../imgs/guidr.png'
const Project = () => {

    return(
        <section className='projects'>
            

            <div>
                <h1>QualityHub</h1>
                <div className='imgContainer'>
                    <img src={hub}/>
                </div>
                <p>
                QualityHub is a web-primary app for both job seekers to polish their skills and for coaches to sell their expertise.

                </p>
                <div className='stack'>
                    <h3>techStack</h3>
                    <ul>
                        <li>React, apollo client, Graphql, prisma, docker</li>
                    </ul> 
                </div>
                <div className='buttonContainer'>
                    <button onClick={() => {window.open('https://bit.ly/2VgsU3o')}}>View Live</button>
                    <button onClick={() => {window.open('https://git.io/JvGZN')}}>View Code</button>    
                </div>
            </div>

            <div>
                <h1>Park Passport</h1>
                <div className='imgContainer'>
                    <img src={park}/>
                </div>
                <p>
                    Built for a 4 day challenge and designed for park lovers and travellers, Park Passport allows users to search for parks and create new posts about Parks not listed.
                </p>
                <div className='stack'>
                    <h3>techStack</h3>
                    <ul>
                        <li>React, Context, StyledComponents, BootStrap</li>
                    </ul> 
                </div>
                <div className='buttonContainer'>
                    <button onClick={() => {window.open('http://bit.ly/37Znj3O') }}>View Live</button>
                    <button onClick={() => {window.open('https://git.io/Jvgez')}}>View Code</button>    
                </div>
            </div>

            <div>
                <h1>Guidr</h1>
                <div className='imgContainer'>
                    <img src={guidr}/>
                </div>
                <p>
                    Built for a 4 day challenge and designed for explorers and travellers, Guidr allows users to see fellow members trips and create trips.
                </p> 
                <div className='stack'>
                    <h3>techStack</h3>
                    <ul>
                        <li>React, Context, StyledComponents, BootStrap, react-context-api, JWT</li>
                    </ul> 
                </div>
                <div className='buttonContainer'>
                    <button onClick={() => {window.open('https://guidr-mgk9dkdka.now.sh/')}}>View Live</button>
                    <button onClick={() => {window.open('https://github.com/Buildweek-guidr/frontend')}}>View Code</button>    
                </div>
            </div>

        </section>
    )
}

export default Project
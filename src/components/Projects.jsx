import React from 'react'
import park from '../imgs/park.png'
import hub from '../imgs/quality.png'
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
                <div className='buttonContainer'>
                    <button onClick={() => {window.location.href = 'https://bit.ly/2VgsU3o'}}>View Live</button>
                    <button onClick={() => {window.location.href = 'https://git.io/JvGZN'}}>View Code</button>    
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
                <div className='buttonContainer'>
                    <button onClick={() => {window.location.href = 'http://bit.ly/37Znj3O'}}>View Live</button>
                    <button onClick={() => {window.location.href = 'https://git.io/Jvgez'}}>View Code</button>    
                </div>
            </div>

        </section>
    )
}

export default Project
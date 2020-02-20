import React from 'react' 

import { FaRobot } from 'react-icons/fa'

import anime from 'animejs'
const HeroCard = () => {

    
    return(
    
        <section className='HeroCard'>
            
            <div>
                <FaRobot />
            </div>
            <div className='HeroCardText'>
                <p>Hi, I am a fullStack Javascript Devleoper with a passion for Learning new tech Currently based in Houston, Tx</p>
                <button>More Info</button>
            </div>
            
        </section>
       
    )
}
export default HeroCard
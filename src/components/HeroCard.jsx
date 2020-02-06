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
                <p>Hello Im a FullStack Developer</p>
                <button>More Info</button>
            </div>
            
        </section>
       
    )
}
export default HeroCard
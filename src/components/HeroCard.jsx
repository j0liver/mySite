import React from 'react' 

import { FaRobot } from 'react-icons/fa'
import ParticlesBackground from './ParticlesBackground'
const HeroCard = () => {

    return(
    // <ParticlesBackground  className='background'>
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
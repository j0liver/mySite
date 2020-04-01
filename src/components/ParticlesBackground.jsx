import React from 'react'
import Particles from 'react-particles-js';
import { FaBlackTie } from 'react-icons/fa';
 

const ParticlesBackground = () => {

	return(
		<section className='particlesBackground'>
			<Particles 
              params={{
            		particles: {
            			line_linked: {
            				shadow: {
            					
            					color: "#3CA9D1",
            					blur: 5
            				}
            			}
            		}
            	}}
              style={{
				width: '100ww',
				height: '100vh',
				backgroundColor: 'black',
				color: 'black',
				zIndex: '-100',
				position: "fixed",
				
				top: "0",
				left: "0"
              }}
            /> 
			</section>
	)
}

export default ParticlesBackground
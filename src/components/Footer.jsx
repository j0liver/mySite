import React from 'react'
import { FaLinkedinIn, FaGithubAlt } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
const Footer = () => {

    return(
        <footer>
            <section className='SocialLinks'>
            <div className='FooterCircles'>
                    <a href='https://www.linkedin.com/in/j0liver/' target="_blank">
                        <FaLinkedinIn />
                    </a>
                </div>
                <div className='FooterCircles'>
                    <a href='https://github.com/j0liver' target="_blank">
                        <FaGithubAlt />
                    </a>
                </div>
                <div className='FooterCircles'>
                    <a href='mailto:j0liverko@Gmail.com' target="_blank">
                        <MdEmail />
                    </a>
                </div>
            </section>
            <section>
                <h4>&copy; Joseph-Oliver</h4>
            </section>
        </footer>
    )
}

export default Footer
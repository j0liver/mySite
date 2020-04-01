import React from 'react'
import { FaLinkedinIn, FaGithubAlt } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
const Footer = () => {

    return(
        <footer>
            <section className='SocialLinks'>
            <div className='FooterCircles'>
                    <a href='https://www.linkedin.com/in/j0liver/'>
                        <FaLinkedinIn />
                    </a>
                </div>
                <div className='FooterCircles'>
                    <a href='https://github.com/j0liver'>
                        <FaGithubAlt />
                    </a>
                </div>
                <div className='FooterCircles'>
                    <a href='mailto:j0liverko@Gmail.com'>
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
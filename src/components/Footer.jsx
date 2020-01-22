import React from 'react'
import { FaLinkedinIn, FaGithubAlt } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
const Footer = () => {

    return(
        <footer>
            <section className='SocialLinks'>
            <div className='FooterCircles'>
                    <a href=''>
                        <FaLinkedinIn />
                    </a>
                </div>
                <div className='FooterCircles'>
                    <a href=''>
                        <FaGithubAlt />
                    </a>
                </div>
                <div className='FooterCircles'>
                    <a href=''>
                        <MdEmail />
                    </a>
                </div>
            </section>
            <section>
                <h4>CopyRight Joseph-Oliver</h4>
            </section>
        </footer>
    )
}

export default Footer
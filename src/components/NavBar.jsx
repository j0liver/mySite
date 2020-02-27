import React from 'react'
import { Link } from 'react-router-dom'
const NavBar = () => {
    const navSlide = () => {
        const burger = document.querySelector('.burger');
        const nav = document.querySelector('.nav-links');
        const navLinks = document.querySelectorAll('.nav-links li');
        
        //Toggle Nav
       
          nav.classList.toggle('nav-active');
          
          //Animate Links
          navLinks.forEach((link, index)=>{
            
            if(link.style.animation){
              link.style.animation = ''
            }else{
                  link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
      
            }
          });
          
          //burger animation
          burger.classList.toggle('toggle');
          
          
        };


     
  
  
    return (
        <header>

            <nav className="navbar">
            <div className="logo">
                <h4>Joseph Oliver</h4>
            </div>
            <ul className="nav-links navbar-nav">
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/projects'>Projects</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
            </ul>
            <div className="burger navbar-toggle" onClick={() => (
                navSlide())}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
            </nav>
        </header>
    )
}


export default NavBar
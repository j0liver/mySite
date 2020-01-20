import React from 'react'
import Link from 'react-router-dom'
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
            {/* <section>
                <div>
                    <img />
                </div>
            </section>
            <section>
                <ul>
                    <Link></Link>
                    <Link></Link>
                    <Link></Link>
                </ul>
            </section> */}

            <nav class="navbar">
            <div class="logo">
                <h4>The nav</h4>
            </div>
            <ul class="nav-links navbar-nav">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Work</a></li>
                <li><a href="#">Projects</a></li>
            </ul>
            <div class="burger navbar-toggle" onClick={() => (
                navSlide())}>
                <div class="line1"></div>
                <div class="line2"></div>
                <div class="line3"></div>
            </div>
            </nav>
        </header>
    )
}


export default NavBar
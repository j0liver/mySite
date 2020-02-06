import React from 'react';
import './App.css';

import { Route } from 'react-router-dom'

import  NavBar  from "./components/NavBar";
import HeroCard from './components/HeroCard'
import Footer from './components/Footer'
import About from './components/About'
import ParticlesBackground from './components/ParticlesBackground'
import ContactForm  from './components/Contact'
import Project from './components/Projects'

function App() {
  return (
    <div className="App">
      
      <NavBar />
      
      <Route exact path='/' component={HeroCard}/>
      <Route path='/about' component={About}/>
      <Route path='/Projects' component={Project}/>
      <Route path='/Contact' component={ContactForm}/>
      <ParticlesBackground/>
      <Footer />
      
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';

import { Route, Router } from 'react-router-dom'

//components
import  NavBar  from "./components/NavBar";
import HeroCard from './components/HeroCard'
import Footer from './components/Footer'
import About from './components/About'
import ParticlesBackground from './components/ParticlesBackground'
import ContactForm  from './components/Contact'
import Project from './components/Projects'
import Success from './components/messageSuccess'
import Failure from './components/messageFailure'

function App() {
  return (
    <div className="App">
      
      <NavBar />
      
      <Route exact path='/' component={HeroCard}/>
      <Route path='/about' component={About}/>
      <Route path='/projects' component={Project}/>
      <Route path='/contact' component={ContactForm}/>
      <Route path='/sent' component={Success}/>
      <Route path='/failed' component={Failure}/>
      <ParticlesBackground/>
      <Footer />
      
    </div>
  );
}

export default App;

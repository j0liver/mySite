import React from 'react';
import './App.css';

import { Route } from 'react-router-dom'

import  NavBar  from "./components/NavBar";
import HeroCard from './components/HeroCard'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Route exact path='/' component={HeroCard}/>
      {/* <Route path='/About' component={}/>
      <Route path='/Projects' component={}/>
      <Route path='/Contact' component={}/> */}
      <Footer />
    </div>
  );
}

export default App;

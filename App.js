import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Portfolio from './components/Portfolio.js'
import NavBar from './components/NavBar.js'
import Home from './components/Home.js'
import About from './components/About.js'
import Contact from './components/Contact.js';

function App() {
  return (
    <section>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/Portfolio' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
      </Routes>
    </section>
  );
}

export default App;

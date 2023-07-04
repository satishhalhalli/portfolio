import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import SocialLink from './components/SocialLink';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <SocialLink />
       <Projects/>
       <Experience/>
       <Contact/>
    </div>
  );
}

export default App;

import React, { Component } from 'react';
import './App.css';
import Navbar from './Navbar';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <About />
        <Portfolio />
        <Contact />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import Navbar from './Navbar';
import About from './About';
import Portfolio from './Portfolio';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <About />
        <Portfolio />
      </div>
    );
  }
}

export default App;

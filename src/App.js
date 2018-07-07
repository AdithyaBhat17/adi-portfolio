import React, { Component } from 'react';
import './App.css';
import Navbar from './Navbar';
import About from './About';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <About />
      </div>
    );
  }
}

export default App;

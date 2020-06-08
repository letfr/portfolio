/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import Projects from './views/Projects/Projects';
import Skills from './views/Skills/Skills';
import About from './views/About/About';
import Intro from './views/Intro/Intro';
import Contact from './views/Contact/Contact';
import data from './data';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Intro data={data} />
        <About data={data} />
        <Skills data={data} />
        <Projects data={data} />
        <Contact data={data} />
        <footer>
          <small>MADE WITH LOVE BY <a href="#">LETICIA FARIA.</a></small>
        </footer>
      </div>
    );
  }
}

export default App;

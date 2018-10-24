import React, { Component } from 'react';
import './App.css';
import Section from './Section.js';
import NavBar from './NavBar.js';
import Image from './Image.js';
import Button from './Button.js';
import Footer from './Footer.js';
import H1Content from './H1Content';


class IntroContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wordArray:  "<Front-End Developer />".split("")
    }
  }

  // tick() {
  //   this.setState({ word: this.state.word + "a" });
  // }
  
  render() {
    return(
    <main className="intro-content">
      <h1 className="h1-intro">Hi, I’m Letícia Faria</h1>
      <h2 className="typewrite">{ this.state.wordArray.forEach( (letter, index) => {
        setTimeout( () => document.querySelector(".typewrite").innerHTML += letter, 150 * index);
      }) }</h2>
      {/* <div className="typewrite">{this.state.word}</div> */}
    </main>
  )}
}

function Intro() {
  return(
    <Section id="intro" className="intro grid">
      <NavBar />
      <IntroContent />
    </Section>
  )
}

function About() {
  return(
    <Section id="about" className="about grid">
      <H1Content>About me</H1Content>
      <p>Lorem ipsum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus aenean vel elit scelerisque. Ante in nibh mauris cursus mattis molestie a iaculis at. Iaculis at erat pellentesque adipiscing commodo elit. 
      <br /> <br />
      Egestas sed sed risus pretium quam vulputate dignissim. Aliquet porttitor lacus luctus accumsan. Faucibus vitae aliquet nec ullamcorper sit amet risus. Libero enim sed faucibus turpis in. </p>
    </Section>
  )
}

class Skills extends Component {
  constructor(props) {
    super(props);

    this.state = {
      front: ["HTML", "CSS", "Bootstrap", "Materialize", "SASS", "Javascript", "Vanilla", "jQuery", "React", "Web APIs", "Gulp", "Responsive Design"],
      back: ["Node.js", "express.js", "socket.io", "mocha & chai", "Database", "SQL", "Firebase"],
      uxui: ["Wireframing", "Prototyping", "Usability", "Visual Communication"]
    }
  }

  render() {
  return(
    <Section id="skills" className="skills">
      <H1Content>Skills</H1Content>
      <div className="skills-content">
        <div>
          <h2>Front-End</h2>
          {this.state.front.map( (item, index) => {
            if (item !== "Bootstrap" && item !== "Materialize" && item !== "Vanilla" && item !== "jQuery"){
              return <p key={index}>{item}</p>
            } else {
              return <small key={index} className="sub-skill">{item}</small>
            }
          })}
        </div>

        <div>
          <h2>Back-End</h2>
          {this.state.back.map( (item, index) => {
            if (item !== "Node.js" && item !== "Database"){
              return <small key={index} className="sub-skill">{item}</small>
            } else {
              return <p key={index}>{item}</p>
            }
          })}
        </div>

        <div>
          <h2>UX/UI</h2>
          {this.state.uxui.map( (item, index) => <p key={index}>{item}</p>)}
        </div>
      </div>
    </Section>
  )}
}

class Portfolio extends Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);

    this.state = {
      buttons: ["E-COMMERCE", "CHAT", "SOCIAL NETWORK", "DASHBOARD", "FOODMAP", "TWITTER"]
    }
  }

  handleClick(type) {
    let imgSrc= "";
    if (type === "E-COMMERCE") {
      imgSrc = './ecommerce.png';
    } else if (type === "DASHBOARD") {
      imgSrc = './dashboard.png';
    } else if (type === "CHAT") {
      imgSrc = './chat.png';
    } else if (type === "SOCIAL NETWORK") {
      imgSrc = './social-network.png';
    } else if (type === "FOODMAP") {
      imgSrc = './foodmap.png';
    } else if (type === "TWITTER") {
      imgSrc = './twitter.png';
    }
    this.setState({imgSrc});
  }

  render() {
    return (
    <Section id="portfolio" className="portfolio">
      <H1Content>My works</H1Content>
      <Image className="mockup" src={require('./assets/mockup.png')} />
      <Image className="image" src={this.state.imgSrc} />
      <div className="works-options">
        {this.state.buttons.map( (item, index) => 
        <Button key={index} onClick={() => this.handleClick(item)} className="works">{item}</Button> 
        )}
      </div>
    </Section>
  )}
}

function Contact() {
  return (
    <Section id="contact" className="contact">
      <H1Content>Contact me</H1Content>
      <div>
        <p>You can send me an email at 
          <a href="#">leticianfaria@hotmail.com</a>
        </p>
        <p>You can find me on
          <a href="https://github.com/leticianfaria">Github</a>
          <a href="https://linkedin.com/in/leticianfaria">LinkedIn</a>
        </p>
      </div>
    </Section>
  );
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Intro />
        <About />
        <Skills />
        <Portfolio />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
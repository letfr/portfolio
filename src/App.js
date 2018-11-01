import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import ScrollIntoView from 'react-scroll-into-view';
import Section from './Section.js';
import NavBar from './NavBar.js';
import Image from './Image.js';
import Button from './Button.js';
import Footer from './Footer.js';
import H1Content from './H1Content';


class IntroContent extends Component {
  constructor(props) {
    super(props);
    this.state = { textIndex: 0 };
  }

  componentDidMount() {
    const textAnimation = setInterval(() => {
      if (this.state.textIndex === 22) {
        clearInterval(textAnimation);
      }
      this.setState(prevState => ({ textIndex: prevState.textIndex + 1 }))
    }, 180)
  }

  render() {
    const text = "<Front-End Developer />";
    const { textIndex } = this.state;

    return (
      <main className="intro-content">
        <h1 className="h1-intro">Hi, I’m Letícia Faria</h1>
        <h2 className="typewrite">{text.slice(0, textIndex)}</h2>
      </main>
    );
  }
}

function Intro() {
  return (
    <Section id="intro" className="intro">
      <NavBar />
      <IntroContent />
    </Section>
  )
}

function About() {
  return (
    <Section id="about" className="about">
      <Fade bottom>
      <H1Content>About me</H1Content>
      <div className="about-content">
        <div className="about-img-container">
          <Image className="about-img" src={require('./assets/leticia.jpg')} />
        </div>
        <p>Hey! My name is Letícia Faria and I'm 21. I'm a Front-end developer and a tech lover. 
        I believe that with dedication and hard work all ours goals can be reached. I like learning new things and finding creative ways to solve problems. 
        <br /> <br />
        <i>"Those who can imagine anything, can create the impossible."</i> 
        <small> - Alan Turing;</small>

        <a target="_blank" href={require("./cv.pdf")} ><Button className="btn btn-cv">VIEW CV</Button></a>
        </p>
      </div>
      </Fade>
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
    return (
      <Section id="skills" className="skills">
      <Fade bottom>
        <H1Content>Skills</H1Content>
        <div className="skills-content">
          <div>
            <h2>Front-End</h2>
            {this.state.front.map((item, index) => {
              if (item !== "Bootstrap" && item !== "Materialize" && item !== "Vanilla" && item !== "jQuery") {
                return <p key={index}>{item}</p>
              } else {
                return <small key={index} className="sub-skill">{item}</small>
              }
            })}
          </div>

          <div>
            <h2>Back-End</h2>
            {this.state.back.map((item, index) => {
              if (item !== "Node.js" && item !== "Database") {
                return <small key={index} className="sub-skill">{item}</small>
              } else {
                return <p key={index}>{item}</p>
              }
            })}
          </div>

          <div>
            <h2>UX/UI</h2>
            {this.state.uxui.map((item, index) => <p key={index}>{item}</p>)}
          </div>
        </div>
        </Fade>
      </Section>
    )
  }
}

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);

    this.state = {
      imgSrc: './ecommerce.png',
      url: 'https://ecommerce-spa.herokuapp.com/',
      buttons: ["E-COMMERCE", "CHAT", "SOCIAL NETWORK", "DASHBOARD", "FOODMAP", "TWITTER"]
    }
  }

  handleClick(type) {
    let imgSrc = "";
    let url = "";
    if (type === "E-COMMERCE") {
      imgSrc = './ecommerce.png';
      url = 'https://ecommerce-spa.herokuapp.com/';
    } else if (type === "DASHBOARD") {
      imgSrc = './dashboard.png';
      url = 'https://leticianfaria.github.io/data-dashboard/';
    } else if (type === "CHAT") {
      imgSrc = './chat.png';
      url = 'https://chat-maluco.herokuapp.com/';
    } else if (type === "SOCIAL NETWORK") {
      imgSrc = './social-network.png';
      url = 'https://rede-social-e1d56.firebaseapp.com/';
    } else if (type === "FOODMAP") {
      imgSrc = './foodmap.png';
      url = 'https://leticianfaria.github.io/foodmap/';
    } else if (type === "TWITTER") {
      imgSrc = './twitter.png';
      url = 'https://leticianfaria.github.io/twitter/';
    }
    this.setState({ imgSrc });
    this.setState({ url });
  }

  render() {
    return (
      <Section id="portfolio" className="portfolio">
      <Fade bottom>
        <H1Content>My works</H1Content>
        <div className="container image-mockup">
        <a target="_blank" className="live-view" href={this.state.url}>
          <Image className="mockup" src={require('./assets/mockup.png')} /> 
          <Image className="image" src={this.state.imgSrc} />
        </a>
        </div>
        <div className="works-options">
          {this.state.buttons.map((item, index) =>
            <Button key={index} onClick={() => this.handleClick(item)} className="works">{item}</Button>
          )}
        </div>
        </Fade>
      </Section>
    )
  }
}

function Contact() {
  return (
    <Section id="contact" className="contact">
    <Fade bottom>
      <H1Content>Contact me</H1Content>
      <div>
        <p>You can send me an email at
          <a href="mailto:leticianfaria@hotmail.com">leticianfaria@hotmail.com</a>
        </p>
        <p>You can find me on
          <a target="_blank" href="https://github.com/leticianfaria">GITHUB</a>
          <a target="_blank" href="https://linkedin.com/in/leticianfaria">LINKEDIN</a>
        </p>
      </div>
      <ScrollIntoView selector="#intro"><button className="btn">SCROLL TOP</button></ScrollIntoView>
      </Fade>

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
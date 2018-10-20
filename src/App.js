import React, { Component } from 'react';
import './App.css';

function NavItem(props) {
  return (
    <a href={props.url} className="nav-item">{props.children}</a>
  )
}

function NavBar(props) {
  const links = ["about", "skills", "portfolio", "contact"];
  return (
    <nav>
      {links.map( (item, index) => <NavItem url={item} key={index}>{item}</NavItem> )}
    </nav>
  )
}

function IntroContent() {
  const h2Content = "<Front-End Developer />".split("");
  return(
    <main className="intro-content">
      <h1 className="h1-intro">Hi, I’m Letícia Faria</h1>
      <h2 className="typewrite">{ h2Content.forEach( (letter, index) => {
        setTimeout( () => document.querySelector(".typewrite").innerHTML += letter, 150 * index);
      }) }</h2>
    </main>
  )
}

function Intro() {
  return(
    <section className="intro grid">
      <NavBar />
      <IntroContent />
    </section>
  )
}

function About() {
  return(
    <section className="about grid">
      <h1 className="h1-content">About me</h1>
      <p>Lorem ipsum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus aenean vel elit scelerisque. Ante in nibh mauris cursus mattis molestie a iaculis at. Iaculis at erat pellentesque adipiscing commodo elit. 
      <br /> <br />
      Egestas sed sed risus pretium quam vulputate dignissim. Aliquet porttitor lacus luctus accumsan. Faucibus vitae aliquet nec ullamcorper sit amet risus. Libero enim sed faucibus turpis in. </p>
    </section>
  )
}

function Skills() {
  const front = ["HTML", "CSS", "Bootstrap", "Materialize", "SASS", "Javascript", "Vanilla", "jQuery", "React", "Web APIs", "Gulp", "Responsive Design"];
  const back = ["Node.js", "express.js", "mocha & chai", "Database", "SQL", "Firebase"];
  const uxui = ["Wireframing", "Prototyping", "Usability", "Visual Communication"];
  return(
    <section className="skills">
      <h1 className="h1-content">Skills</h1>
      <div className="skills-content">
        <div>
          <h2>Front-End</h2>
          {front.map( (item, index) => {
            if (item !== "Bootstrap" && item !== "Materialize" && item !== "Vanilla" && item !== "jQuery"){
              return <p key={index}>{item}</p>
            } else {
              return <small key={index} className="sub-skill">{item}</small>
            }
          })}
        </div>

        <div>
          <h2>Back-End</h2>
          {back.map( (item, index) => {
            if (item !== "Node.js" && item !== "Database"){
              return <small key={index} className="sub-skill">{item}</small>
            } else {
              return <p key={index}>{item}</p>
            }
          })}
        </div>

        <div>
          <h2>UX/UI</h2>
          {uxui.map( (item, index) => <p key={index}>{item}</p>)}
        </div>
      </div>
    </section>
  )
}

function Portfolio() {
  return (
    <section className="portfolio grid">
          <h1 className="h1-content">My works</h1>
          <div className="works work-1">
            <a href="#">DASHBOARD</a>
          </div>
          <div className="works work-2">
            <a href="#">CHAT</a>
          </div>
          <div className="works work-3">
            <a href="#">SOCIAL NETWORK</a>
          </div>
          <div className="works work-4">
            <a href="#">E-COMMERCE</a>
          </div>
          <div className="works work-5">
            <a href="#">FOODMAP</a>
          </div>
          <div className="works work-6">
            <a href="#">TWITTER</a>
          </div>
        </section>
  );
}

function Contact() {
  return (
    <section className="contact">
      <h1>Contact me</h1>
      <div>
        <p>You can send me an email at 
          <a href="#">leticianfaria@hotmail.com</a>
        </p>
        <p>You can find me on
          <a href="#">github.com/leticianfaria</a>
          <a href="#">linkedin.com/in/leticianfaria</a>
        </p>
      </div>
    </section>
  );
}

function Footer(){
  return (
    <footer>
      <small>MADE BY <a href="#">LETÍCIA FARIA.</a></small>
    </footer>
  );
}

class App extends Component {

  componentDidMount() {
    //
  }

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

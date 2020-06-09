import React, { Component } from "react"
import Fade from "react-reveal/Fade";
import ScrollIntoView from 'react-scroll-into-view';
import './Contact.scss'

class Contact extends Component {
  render() {
    let data = this.props.data;
  
    return (
      <section id="contact" className="contact">
      <Fade bottom>
        <h1 className="h1-content">Contact me</h1>
        <div>
          <p>You can send me an email at
            <a href="mailto:leticianfaria@hotmail.com">{data.email}</a>
          </p>
          <p>You can find me on
            <a target="_blank" 
              rel="noopener noreferrer" 
              href="https://github.com/letfr">
              GITHUB
            </a>
            <a target="_blank"
              rel="noopener noreferrer" 
              href="https://linkedin.com/in/letfr">
              LINKEDIN
            </a>
          </p>
        </div>
        <ScrollIntoView selector="#intro"><button className="btn">SCROLL TOP</button></ScrollIntoView>
        </Fade>
  
      </section>
    );
  }
}

export default Contact;
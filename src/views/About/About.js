import React, { Component } from "react"
import Fade from "react-reveal/Fade";
import './About.scss'

  class About extends Component {
    render() {
      let data = this.props.data;
    
      return (
      <section id="about" className="about">
        <Fade bottom>
        <div className="about-content">
          <div className="about-text">
            <h1 className="h1-content">About me</h1>
            <div>
              <p> {data.aboutme} </p>
              <i>{data.quote.text} <small> - {data.quote.author};</small></i>
              
            </div>
        
            <div className="box-buttons">
              <a 
              className="btn btn-cv"
              target="_blank" 
              rel="noopener noreferrer" 
              href={require("../../assets/files/cv-pt.pdf")} >
              VIEW CV (pt-BR)
              </a>
              <a 
              className="btn btn-cv"
              target="_blank" 
              rel="noopener noreferrer" 
              href={require("../../assets/files/cv-en.pdf")} >
              VIEW CV (en-US)
              </a>
            </div>
          </div>
        
          <div className="icon-girl">
            <img src={require('../../assets/img/namaste-girl.png')} alt="namaste-girl"/>
          </div>
        </div>
      </Fade>
    </section>
    );
  }
}

export default About;
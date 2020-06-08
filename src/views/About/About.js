import React, { Component } from "react"
import Fade from "react-reveal/Fade";

  class About extends Component {
    render() {
      let data = this.props.data;
    
      return (
      <section id="about" className="about">
        <Fade bottom>
        <h1>About me</h1>
        <div className="about-content">
          <div>
          <p> {data.aboutme}
          <i>{data.quote.text}</i> 
          <small> - {data.quote.author};</small>
          </p>

          <a target="_blank" rel="noopener noreferrer" href={require("../../assets/files/cv-pt.pdf")} >VIEW CV</a>
          <a target="_blank" rel="noopener noreferrer" href={require("../../assets/files/cv-en.pdf")} >VIEW CV</a>
          </div>
          <div className="about-img-container">
            <img className="about-img" src={require('../../assets/img/namaste-girl.png')} alt=""/>
          </div>
          
        </div>
      </Fade>
    </section>
    );
  }
}

export default About;

import React, { Component } from "react"
import Fade from "react-reveal/Fade";
import images from '../../utils/images'
import './Projects.scss'

class Projects extends Component {
    constructor(props) {
      super(props);
      this.handleClick = this.handleClick.bind(this);
  
      this.state = {
        projects: this.props.data.projects,
        imgSrc: images.dashboard,
        url: this.props.data.projects[0].url,
      }
    }
  
    handleClick(type) {
      this.state.projects.forEach(el => {
        if (el.name === type) {
          this.setState({ 
            imgSrc: `../../assets/img/${el.name}.png`,
            url: el.url 
          });
          console.log(this.state.imgSrc);
        }
      });
    }
  
    render() {
      return (
        <section id="portfolio" className="portfolio">
        <Fade bottom>
          <h1 className="h1-content">My works</h1>
          <div className="container image-mockup">
            <a 
              target="_blank"
              rel="noopener noreferrer"
              className="live-view"
              href={this.state.url}
            >
              <img className="mockup" src={require('../../assets/img/mockup.png')} alt="mockup-computer"/> 
              <img className="image" src={this.state.imgSrc} alt="project-screenshot"/>
            </a>
          </div>
          <div className="works-options">
            {this.state.projects.map((item, index) =>
              <button 
                key={index} 
                onClick={() => this.handleClick(item.name)} 
                className="btn works">
                {item.name}
              </button>
            )}
          </div>
          </Fade>
        </section>
      )
    }
  }

export default Projects;

import React, { Component } from "react"
import Fade from "react-reveal/Fade";
import images from '../../utils/images'
import './Projects.scss'

class Projects extends Component {
    constructor(props) {
      super(props);
      this.handleClick = this.handleClick.bind(this);
  
      this.state = {
        imgSrc: '../../assets/img/dashboard.png',
        url: this.props.data.projects[0].url,
        buttons: ["dashboard", "newspocket", "chat", "labwine", "foodmap"]
      }
    }
  
    handleClick(type) {
      const projects = this.props.data.projects;
      let imgSrc = "";
      let url = "";

      projects.forEach(el => {
        if (el.name === type) {
          imgSrc = images.el.name;
          url = el.url;
        }
      });

      this.setState({ imgSrc, url });
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
              <img className="mockup" src={require('../../assets/img/mockup.png')} alt=""/> 
              <img className="image" src={this.state.imgSrc} alt=""/>
            </a>
          </div>
          <div className="works-options">
            {this.state.buttons.map((item, index) =>
              <button key={index} onClick={() => this.handleClick(item)} className="btn works">{item}</button>
            )}
          </div>
          </Fade>
        </section>
      )
    }
  }

export default Projects;
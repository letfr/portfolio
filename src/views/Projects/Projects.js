
import React, { Component } from "react"
import Fade from "react-reveal/Fade";
import images from '../../utils/images'
import './Projects.scss'

class Projects extends Component {
    constructor(props) {
      super(props);
      this.handleClick = this.handleClick.bind(this);
  
      this.state = {
        imgSrc: images.dashboard,
        url: 'https://letfr.github.io/data-dashboard/',
        buttons: ["DASHBOARD", "NEWS-POCKET", "CHAT","ECOMMERCE", "LAB WINE", "FOODMAP"]
      }
    }
  
    handleClick(type) {
      let imgSrc = "";
      let url = "";
      switch (type) {
        case "NEWS-POCKET":
          imgSrc = images.newspocket;
          url = 'https://news-pocket.herokuapp.com/';
          break;
        case "DASHBOARD":
          imgSrc = images.dashboard;
          url = 'https://letfr.github.io/data-dashboard/';
          break;
        case "CHAT":
          imgSrc = images.chat;
          url = 'https://chat-maluco.herokuapp.com/';
          break;
        case "ECOMMERCE":
          imgSrc = images.ecommerce;
          url = 'https://github.com/letfr/ecommerce-spa';
          break;
        case "FOODMAP":
          imgSrc = images.foodmap;
          url = 'https://letfr.github.io/foodmap/';
          break;
        case "LAB WINE":
          imgSrc = images.labwine;
          url = 'https://letfr.github.io/rede-social/';
          break;
        default: 
          imgSrc = "";
          url = "";
      };
      this.setState({ imgSrc, url });
    }
  
    render() {
      return (
        <section id="portfolio" className="portfolio">
        <Fade bottom>
          <h1 className="h1-content">My works</h1>
          <div className="container image-mockup">
          <a target="_blank" rel="noopener noreferrer" className="live-view" href={this.state.url}>
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
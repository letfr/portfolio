
import React, { Component } from "react"
import Fade from "react-reveal/Fade";

class Projects extends Component {
    constructor(props) {
      super(props);
      this.handleClick = this.handleClick.bind(this);
  
      this.state = {
        imgSrc: './img/dashboard.png',
        url: 'https://leticianfaria.github.io/data-dashboard/',
        buttons: ["DASHBOARD", "NEWS-POCKET", "CHAT", "LAB WINE", "FOODMAP"]
      }
    }
  
    handleClick(type) {
      let imgSrc = "";
      let url = "";
      if (type === "NEWS-POCKET") {
        imgSrc = './img/news-pocket.png';
        url = 'https://news-pocket.herokuapp.com/';
      } else if (type === "DASHBOARD") {
        imgSrc = './img/dashboard.png';
        url = 'https://leticianfaria.github.io/data-dashboard/';
      } else if (type === "CHAT") {
        imgSrc = './img/chat.png';
        url = 'https://chat-maluco.herokuapp.com/';
      } else if (type === "LAB WINE") {
        imgSrc = './img/social-network.png';
        url = 'https://leticianfaria.github.io/rede-social/';
      } else if (type === "FOODMAP") {
        imgSrc = './img/foodmap.png';
        url = 'https://leticianfaria.github.io/foodmap/';
      } 
      this.setState({ imgSrc });
      this.setState({ url });
    }
  
    render() {
      return (
        <section id="portfolio" className="portfolio">
        <Fade bottom>
          <h1 className="h1-content">My works</h1>
          <div className="container image-mockup">
          <a target="_blank" rel="noopener noreferrer" className="live-view" href={this.state.url}>
            <img className="mockup" src={require('../../assets/mockup.png')} alt=""/> 
            <img className="image" src={this.state.imgSrc} alt=""/>
          </a>
          </div>
          <div className="works-options">
            {this.state.buttons.map((item, index) =>
              <button key={index} onClick={() => this.handleClick(item)} className="works">{item}</button>
            )}
          </div>
          </Fade>
        </section>
      )
    }
  }

export default Projects;
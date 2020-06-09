
import React, { Component } from "react"
import NavBar from "../../components/NavBar/NavBar"
import './Intro.scss'

class Intro extends Component {
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
      let data = this.props.data;
      const { textIndex } = this.state;
  
      return (
        <section id="intro" className="intro">
          <NavBar />
          <main className="intro-content">
            <div className="icon-girl">
              <img src={require('../../assets/img/computer-girl.png')} alt="computer girl"/>
            </div>
            <div className="intro-text">
              <h1 className="h1-intro">Hi, I’m {data.name}</h1>
              <h2 className="typewrite">{data.role.slice(0, textIndex)}</h2>
            </div>
          </main>
        </section>
      );
    }
  }
  
export default Intro;
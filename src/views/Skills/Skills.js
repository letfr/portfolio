import React, { Component } from "react"
import Fade from "react-reveal/Fade";
import './Skills.scss'

class Skills extends Component {
  render() {
    let data = this.props.data;

    return (
      <section id="skills" className="skills">
        <Fade bottom>
          <h1 className="h1-content">Skills</h1>
          <div className="skills-content">
            <h2>Development</h2>
              <div className="skills-itens">
              {data.skills.development.map((item, index) => <p key={index}>{item}</p>)}
              </div>
            <h2>Testing tools</h2>
              <div className="skills-itens">
              {data.skills.testing.map((item, index) => <p key={index}>{item}</p>)}
              </div>
          </div>
        </Fade>
      </section>
    )
  };
};

export default Skills;

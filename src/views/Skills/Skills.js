import React, { Component } from "react"
import Fade from "react-reveal/Fade";
import './Skills.scss'

class Skills extends Component {
  constructor(props) {
    super(props);

    this.state = {
      skills: ["HTML", "CSS", "SASS", "Javascript", "Vue.js", "React", "Node.js"],
    };
  };

  render() {
    return (
      <section id="skills" className="skills">
        <Fade bottom>
          <h1 className="h1-content">Skills</h1>
          <div className="skills-content">
              {this.state.skills.map((item, index) => <p key={index}>{item}</p>)}
          </div>
        </Fade>
      </section>
    )
  };
};

export default Skills;

import React, { Component } from 'react';
import './NavBar.scss';
import ScrollIntoView from 'react-scroll-into-view';

class NavBar extends Component {
  constructor(props){
    super(props);
    this.state = {
      links: ["about", "skills", "portfolio", "contact"],
      }
    }
    
  render() {
    return (
    <nav>
      {this.state.links.map((item) =>
      <ScrollIntoView id="menu" selector={"#" + item}>
        <button key={item} className="nav-item">{item}</button>
      </ScrollIntoView>)}
    </nav>
    )
  };
};

export default NavBar;
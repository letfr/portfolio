import React, { Component } from 'react';
import './NavBar.scss';
import ScrollIntoView from 'react-scroll-into-view';

function NavItem(props) {
  return (
    <button className="nav-item">{props.children}</button>
  )
}

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
      {this.state.links.map((item, index) =>
      <ScrollIntoView id="menu" selector={"#" + item}>
        <NavItem key={index}>{item}</NavItem>
      </ScrollIntoView>)}
    </nav>
    )
  };
};

export default NavBar;
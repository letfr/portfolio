import React, { Component } from 'react';
import './NavBar.css';

function NavItem(props) {
  return (
    <a href={props.url} className="nav-item">{props.children}</a>
  )
}

class NavBar extends Component {
  constructor(props){
    super(props);
    this.state = {
      links: ["about", "skills", "portfolio", "contact"]
    }
  }
  render() {
    return (
    <nav>
      {this.state.links.map((item, index) => <NavItem url={"#" + item} key={index}>{item}</NavItem>)}
    </nav>
    )
  }
}

export default NavBar;
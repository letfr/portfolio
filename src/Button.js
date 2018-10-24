import React, { Component } from 'react';
import './Button.css';

function Button(props) {
  return <button id={props.index} onClick={props.onClick} className={props.className}>{props.children}</button>
}

export default Button;

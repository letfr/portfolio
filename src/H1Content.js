import React, { Component } from 'react';
import './H1Content.css';

function H1Content(props) {
  return <h1 className="h1-content">{props.children}</h1>
}

export default H1Content;
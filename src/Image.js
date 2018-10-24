import React, { Component } from 'react';

function Image(props) {
  return <img className={props.className} src={props.src} />
}

export default Image;
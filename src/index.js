import './styles/index.scss';
import { render } from 'react-dom';
import App from './App';
import React from 'react';
import { unregister } from './serviceWorker';

render(<App />, document.getElementById('root'));

unregister();
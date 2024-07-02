import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import './App.css';

console.log('Rendering App');  // Add this line to check if this file is being executed

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Theme from './styles/theme';


ReactDOM.render(
  <React.StrictMode>
    <Theme>
    <App />
    </Theme>
  </React.StrictMode>,
  document.getElementById('root')
);


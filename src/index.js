import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import './fonts/TrajanPro-Bold.ttf'
import './fonts/ArchivoNarrow-Bold.ttf'
import './fonts/HankenGrotesk-Bold.ttf'
import './fonts/Avenir.ttf'
import './fonts/Roboto-Black.ttf'
import './fonts/Roboto-Bold.ttf'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

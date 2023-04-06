import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'; //jsx elements -> react components
import reportWebVitals from './reportWebVitals';

// reactdom-> helps us to insert virtual DOM(JSX) INTO REAL DOM(index.html)
// babel js => trans-compiler => jsx into excuatable js

 import "bootstrap/dist/css/bootstrap.min.css"
 import "bootstrap/dist/js/bootstrap.bundle"
 
 import "bootstrap-icons/font/bootstrap-icons.css"
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
 

// ReactDOM ->help us to insert virtualdom(jsx) into real rom
// babel js ->trans-compiler->jsx into executable js

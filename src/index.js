import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './App';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

const rootElement=document.getElementById('root');
const root=createRoot(rootElement);

root.render(
  <Router>
    <App/>
  </Router>
)

// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );


import React, { Component ,useEffect, useState} from 'react';
import './App.css';
import Home from './renders/home';
import Main from './renders/main';
import Checkout from './renders/checkout';

import {gapi} from 'gapi-script';
import { BrowserRouter as Router, Route, Routes,Link } from 'react-router-dom';


const clientID="850105773183-smsnkfjedisv5anla6at2c4f43fspcat.apps.googleusercontent.com";

function App() {
    useEffect(()=>{
      function start(){
        gapi.client.init({
          clientID:clientID,
          scope:""
        })
      };
      gapi.load('client:auth2',start);
    });
    // const [auth,setAuth]=useState(false);
    
    return (
      <div className='App'>
        <Routes>
          <Route  path="/" element={<Home/>}/>
          <Route  path="/home" element={<Home />}/>
          <Route  path="/main" element={<Main authorized={true} />}/>
          <Route  path="/checkout" element={<Checkout/>}/>
        </Routes>
      </div>
    );
}

export default App;


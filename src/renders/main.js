import React from 'react';
import {Navbar2} from '../components/Header.js';
import Footer from '../components/Footer';
import Cart from '../components/CartTest';
import {Navigate} from 'react-router-dom'


function Main({authorized},props){
    return (authorized?<div>
        <Navbar2 props={props} />
        <Cart/>
        <Footer/>
    </div>
    : <Navigate to="/home"/>);}
    
export default Main;
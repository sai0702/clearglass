import React from 'react';
import {Navbar1} from '../components/Header.js';
import {Tagline} from '../components/Tagline';
import Carousel from '../components/Carousel';
import Footer from '../components/Footer'


function Home(){
    
    
    return(
        <div>
            <Navbar1/>
            <Tagline/>
            <Carousel/>
            <Footer/>
        </div>
   );}

export default Home;
  
  
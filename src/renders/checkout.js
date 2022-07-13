import React from 'react';
import {Navbar3} from '../components/Header.js';
import Footer from '../components/Footer';
import { CheckoutMsg } from '../components/Tagline.js';

const Checkout=()=>{
    return(
        <div>
            <Navbar3/>
            <CheckoutMsg />
            <Footer/>
        </div>
    );
};
  
export default Checkout;


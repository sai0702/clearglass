import React from "react";
import '../assets/FooterStyle.css';
import {FaTwitter,FaInstagram,FaYoutube,FaEnvelope,FaPhone,FaMapMarker,FaCocktail,FaBlog,FaComment} from 'react-icons/fa';

function Footer(){
    return(
        <div className="footer" >
            {/* <h1>This is Footer</h1> */}
            <div className="leftFooter">
                <h1>About</h1>
                <div>
                    <a href="/"><FaCocktail/> Services</a><br/><hr/>
                    <a href="/"><FaBlog/> Blog</a><br/><hr/>
                    <a href="/"><FaComment/> Stories</a><br/><hr/>
                </div>

            </div>
            <div className="middleFooter">
                <h1>Contact Us</h1>
                    <a href="/"><FaEnvelope/> official@clearglass.com</a><br/><hr/>
                    <a href="/"><FaPhone/> +91 1234567890</a><br/><hr/>
                    <a href="/"><FaMapMarker/> Block A, Valley Hills, Crescent, 162534  </a><br/><hr/>

            </div>
            <div className="rightFooter">
                <h1>Social</h1>
                    <a href="/"><FaTwitter/> Twitter</a><br/><hr/>
                    <a href="/"><FaInstagram/> Instagram</a><br/><hr/>
                    <a href="/"><FaYoutube/> YouTube</a><br/><hr/>
                

            </div>



        </div>
    );
}
export default Footer;
import React from "react";
import { Image } from "../assets/images";

const taglineStyle={
    position:"absolute",
    fontSize:"clamp(20px,7.5vw,75px)",
    fontFamily:"'Dancing Script', cursive",
    width:"50%",
    fontWeight:700,
    margin:"clamp(20px,3vw,30px)",
    color:"#FBFCFC",
    zIndex:10,
    left:"clamp(20px,3vw,30px)",
    top:"8vh",
    backgroundImage:
        "linear-gradient(-225deg,#5500ff 29%,#ff1361 67%,#fff800 100%)",
    backgroundSize: ["auto auto", "200% auto"],
    backgroundClip: ["border-box", "text"],
    color: "#fff",
    textFillColor: "transparent",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    animation: "textclip 2s linear infinite",
    display: "inline-block",
    '@keyframes textclip':'{backgroundPosition: "200% center" }',
}
    



function Tagline(){
    return(
        <div style={{height:"clamp(300px,20vh,400px)",width:"100%",top:"18vh",position:"absolute"}}>
        <h1 style={taglineStyle}>If life gives you lemons, make a Lemonade and Enjoy!</h1>
        <Image />
        </div>
    );
}

function CheckoutMsg(){
    return(
        <div style={{height:"clamp(300px,20vh,400px)",width:"100%",top:"18vh",position:"absolute"}}>
        <h1 style={taglineStyle}>You've placed your order successfully!</h1>
        <Image />
        </div>
    );

}
// 
export {Tagline,CheckoutMsg};

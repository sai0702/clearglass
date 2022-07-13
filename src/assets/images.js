import React from "react";

const imgStyle={
    width:"clamp(150px,50vw,400px)",
    height:"clamp(200px,56vh,500px)",
    right:"clamp(70px,15%,200px)",
    top:"clamp(0,20vh,100px)",
    // objectFit:"none",
    position:"absolute",
    float:"right",
    flex:1,
    zIndex:-2,
    resizeMode:'contain',
}
function BackgroundImg()
{return(<img src="https://images.unsplash.com/photo-1546864909-fb2cb357c00a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NnxFZjdIazNodC03QXx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"></img>);}

function Image()
// {return(<img style={imgStyle} src="https://images.unsplash.com/photo-1603064973490-a46594e1c6af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGJsYWNrJTIwY29ja3RhaWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"></img>);}
 {return(<img style={imgStyle} src="https://images.unsplash.com/photo-1550850584-455a131629e8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw5NzE0MDM4fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"></img>);}

const data=[
    {
        id:1,
        qty:0,
        title:'Strawberry Lime',
        price:'$ 4.00',
        cost:4,
        linkImg:"https://images.unsplash.com/photo-1497534446932-c925b458314e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZHJpbmtzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
        id:2,
        qty:0,
        title:'Blue Mojito',
        price:'$ 4.00',
        cost:4,
        linkImg:"https://images.unsplash.com/photo-1541745038731-f1c2b5a1a49e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
        id:3,
        qty:0,
        title:'Grapefruit Juice',
        price:'$ 4.00',
        cost:4,
        linkImg:"https://images.unsplash.com/photo-1581646835455-0b54aebce149?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8N3wxMDA4NTI5N3x8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
        id:4,
        qty:0,
        title:'Lemonade',
        price:'$ 4.00',
        cost:4,
        linkImg:"https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZHJpbmtzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
        id:5,
        qty:0,
        title:'Watermelon Mint',
        price:'$ 4.00',
        cost:4,
        linkImg:"https://images.unsplash.com/photo-1578224709521-ecee303b012f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8Mnw4NjY5NTc1fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
        id:6,
        qty:0,
        title:'Kiwi Shake',
        price:'$ 4.00',
        cost:4,
        linkImg:"https://images.unsplash.com/photo-1541591425126-4e6dcf84b386?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
        id:7,
        qty:0,
        title:'Mango Lime',
        price:'$ 4.00',
        cost:4,
        linkImg:"https://images.unsplash.com/photo-1597403491447-3ab08f8e44dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGRyaW5rc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
        id:8,
        qty:0,
        title:'Tropical Fruity',
        price:'$ 4.00',
        cost:4,
        linkImg:"https://images.unsplash.com/photo-1551024709-8f23befc6f87?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZHJpbmtzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
        id:9,
        qty:0,
        title:'Mocktail Blend',
        price:'$ 4.00',
        cost:4,
        linkImg:"https://images.unsplash.com/photo-1587223962930-cb7f31384c19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y29ja3RhaWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    },
    {
        id:10, 
        qty:0,
        title:'Cherry Mojito',
        price:'$ 4.00',
        cost:4,
        linkImg:"https://images.unsplash.com/photo-1468465236047-6aac20937e92?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        },
    {
        id:11,
        qty:0,
        title:'Choco Coffee',
        price:'$ 4.00',
        cost:4,
        linkImg:"https://images.unsplash.com/photo-1642647392045-8592bf9b5900?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
        id:12,
        qty:0,
        title:'Cold Brew',
        price:'$ 4.00',
        cost:4,
        linkImg:"https://images.unsplash.com/photo-1625126590447-cb769384e1f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
]
export {data,Image,BackgroundImg};

// To use
// import * as All from './assets/images';
// <All.BackgroundImg/>

// icons usage
// import FacebookIcon from '@material-ui/icons/Facebook';  
// import TwitterIcon from '@material-ui/icons/Twitter';  
// import LinkedInIcon from '@material-ui/icons/LinkedIn';  
// import MailIcon from '@material-ui/icons/Mail';  
// import InstagramIcon from '@material-ui/icons/Instagram';  
// import YouTubeIcon from '@material-ui/icons/YouTube';  
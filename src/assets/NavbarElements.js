import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';


const Nav = styled.nav`
background: none;
height: ${(props=>(props.extendedNavbar?"100vh":"15%"))};
display: flex;
justify-content: space-between;
padding: 0.2rem calc((100vw - 1000px) / 2);
z-index: 12;
width:30%;
position:fixed;
flex-direction:column;
top:0;
@media screen and (max-width: 768px){
	background:none;
}
`;

const NavLink = styled(Link)`
color: #ff80ff;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor: pointer;
font:bold 20px 'Allura'cursive;
font-size:4vh;
font-weight:700;
margin:1%;

&.active {
	color: grey;
}
&:hover{
	color:#FBFCFC;
	moz-transition: all .4s ease-in-out;
	-o-transition: all .4s ease-in-out;
	-webkit-transition: all .4s ease-in-out;
	transition: all .4s ease-in-out;
	font-size:4.5vh;
}
`;

const NavMenu = styled.div`
display: flex;
align-items: center;
margin: 4%;
top:1%;
right:0;
position:fixed;
width:60%;
@media screen and (max-width: 768px) {
	display: none;
}
`;



const NavBtn = styled.button`
display: column;
align-items: center;
top:8%;
float:right;
position:fixed;
right:8%;
background:none;
cursor:pointer;
zIndex:24;
border:3px;
border-radius:8px;
@media screen and (max-width: 768px) {
	top: 4%;
	right:2%;

}

background: linear-gradient(60deg, #29323c, #485563, #2b5876, #4e4376);
animation: animatedgradient 3s ease alternate infinite;
background-size: 300% 300%;

  
  
  @keyframes animatedgradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }


&:hover {
	${'' /* transition: all 0.2s ease-in-out;
	background: #FBFCFC; 
	color: #FA06CA;*/}
	background-position: 100% 0;
    moz-transition: all .4s ease-in-out;
    -o-transition: all .4s ease-in-out;
    -webkit-transition: all .4s ease-in-out;
    transition: all .4s ease-out-in;
	background-image: linear-gradient(to right, #f79533, #f37055, #ef4e7b, #a166ab, #5073b8, #1098ad, #07b39b, #6fba82);
    box-shadow: 0 4px 15px 0 rgba(45, 54, 65, 0.75);
	font-size:4.4vh;
	}


`;
const NavBtnLink = styled(Link)`
border-radius: 4px;
padding: 10px 10px;
color: #FBFCFC;
outline: none;
border: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;
font:bold clamp(18px,30vw,50px) "Allura"cursive;
font-weight:700;
font-size:3.8vh;
zIndex:16;



background: linear-gradient(60deg, #29323c, #485563, #2b5876, #4e4376);
animation: animatedgradient 3s ease alternate infinite;
background-size: 300% 300%;

  
  
  @keyframes animatedgradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }


&:hover {
	${'' /* transition: all 0.2s ease-in-out;
	background: #FBFCFC; 
	color: #FA06CA;*/}
	background-position: 100% 0;
    moz-transition: all .4s ease-in-out;
    -o-transition: all .4s ease-in-out;
    -webkit-transition: all .4s ease-in-out;
    transition: all .4s ease-out-in;
	background-image: linear-gradient(to right, #f79533, #f37055, #ef4e7b, #a166ab, #5073b8, #1098ad, #07b39b, #6fba82);
    box-shadow: 0 4px 15px 0 rgba(45, 54, 65, 0.75);
	font-size:4.4vh;
	}

`;
const Bars = styled(FaBars)`
display: none;
color: #808080;

@media screen and (max-width: 768px) {
	display: block;
	position: fixed;
	top: 1%;
	left: 10%;
	transform: translate(-100%, 75%);
	font-size: 1.8rem;
	cursor: pointer;
}
`;
const NavbarExtended=styled.div`
display:flex;
flex-direction:column;
align-items:center;
background:none;
justify-content:space-between;
padding: 0.2rem calc((100vw - 1000px) / 2);
margin:4%;
z-index: 14;
width:25%;
left:2%;
top:10vh;
position:absolute;
height:20%;

@media screen and (min-width:768px){
	display:none;
}
`;
const Brand=styled.div`
font:bold italic 10vh "Tangerine",cursive;
font-weight:800;
display: flex;
align-items: center;
margin: 4%;
top:0;
position:fixed;
left:8%;
color:#1affff;
@media screen and (max-width:768px){
	top:0;
	font:4px;
}

`;


// .btn-hover {
//     width: 200px;
//     font-size: 16px;
//     font-weight: 600;
//     color: #fff;
//     cursor: pointer;
//     margin: 20px;
//     height: 55px;
//     text-align:center;
//     border: none;
//     background-size: 300% 100%;

//     border-radius: 50px;
//     moz-transition: all .4s ease-in-out;
//     -o-transition: all .4s ease-in-out;
//     -webkit-transition: all .4s ease-in-out;
//     transition: all .4s ease-in-out;
// }

// .btn-hover:hover {
//     background-position: 100% 0;
//     moz-transition: all .4s ease-in-out;
//     -o-transition: all .4s ease-in-out;
//     -webkit-transition: all .4s ease-in-out;
//     transition: all .4s ease-in-out;
// }

// .btn-hover:focus {
//     outline: none;
// }

// .btn-hover.color-1 {
//     background-image: linear-gradient(to right, #25aae1, #40e495, #30dd8a, #2bb673);
//     box-shadow: 0 4px 15px 0 rgba(49, 196, 190, 0.75);
// }
	

export {Nav,NavLink,Bars,NavMenu,NavBtn,NavBtnLink,NavbarExtended,Brand,};

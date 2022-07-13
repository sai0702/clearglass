import React,{useState} from 'react';
import { Nav,NavLink,Bars,NavMenu,NavBtn,NavbarExtended,Brand,} from '../assets/NavbarElements';
import {GoogleLogin, GoogleLogout} from 'react-google-login';
import GoogleButton from 'react-google-button';
import { useNavigate } from "react-router-dom";

function Navc(){
	const [extendedNavbar,setExtendedNavbar] =useState(false);

	return (<Nav extendedNavbar={extendedNavbar}  >
		<Bars onClick={()=>{
			setExtendedNavbar((curr)=>!curr);
		}}></Bars>
		<Brand>Clear Glass</Brand>
		<NavMenu>
		<NavLink to="/home">
			About
		</NavLink>
		<NavLink to='/home'>
			Home
		</NavLink>
		</NavMenu>
		{
			extendedNavbar && 
			(<NavbarExtended>
				<NavLink to="/" >
					About
				</NavLink>
				<NavLink to='/home'>
					Home
				</NavLink>
				</NavbarExtended>)}		
	</Nav>);
}

function Navbar1(){
	let navigate=useNavigate();

	const clientID="850105773183-smsnkfjedisv5anla6at2c4f43fspcat.apps.googleusercontent.com";
	const handleFailure=(err)=>{
		console.log(err);
	};
	const handleLogin=(googleData)=>{
		// props.setAuth(true);
		navigate("/main");
		console.log("sucess",googleData);
		// setAuth(true);
	};
	return (
		<div style={{backgroundColor:"black",height:"18%",zIndex:"18",width:"100%",position:"fixed",top:0,overflow:"hidden"}}>	
			<Navc/>
			<NavBtn >
				<GoogleLogin
					clientId={clientID}
					buttonText="Login"
					onSuccess={handleLogin}
					onFailure={handleFailure}
					cookiePolicy={'single_host_origin'}
					render={renderProps => (
						<GoogleButton onClick={renderProps.onClick}  style={{background:"None"}} type="dark" label='Sign In' ></GoogleButton>
					)}	
				/>
				</NavBtn>
				



			{/* <NavBtn style={{marginLeft:"2%"}} >
			<NavBtnLink  to='/signin' >Sign In</NavBtnLink>
			</NavBtn>
			<NavBtn style={{right:"20%",marginRight:0}}>
			<NavBtnLink  to='/sign-up'>Sign Up</NavBtnLink>
			</NavBtn> */}
			
		</div>

	);
};
		


function Navbar2(){
	const clientID="850105773183-smsnkfjedisv5anla6at2c4f43fspcat.apps.googleusercontent.com";
	
	let navigate=useNavigate();
	// const [showLogoutButton,setShowLogoutButton]=useState(true);
	const onSignoutSuccess=(res)=>{
		// props.setAuth(false);
		navigate('/checkout');
		alert("You have been signed out successfully!");
		// setAuth(false);
	};
return (
	<div style={{backgroundColor:"black",height:"18%",zIndex:"18",width:"100%",position:"fixed",top:0,overflow:"hidden"}}>	
	<Navc/>
	<NavBtn >
		<GoogleLogout
			clientId={clientID}
			buttonText="Logout"
			onLogoutSuccess={onSignoutSuccess}
			render={renderProps => (
				<GoogleButton onClick={renderProps.onClick} style={{background:"None"}} type="dark" label='Logout'>Logout</GoogleButton>
			)}
			
		/>
	</NavBtn>    	
	</div>

);
};


function Navbar3(){
	return(
		<div style={{backgroundColor:"black",height:"18%",zIndex:"18",width:"100%",position:"fixed",top:0,overflow:"hidden"}}>	
		<Navc/>
		{/* <NavBtn style={{marginLeft:"2%"}} >
		<NavBtnLink  to='/signin' >Pay Now</NavBtnLink>
		</NavBtn>
		<NavBtn style={{right:"20%",marginRight:0}}>
		<NavBtnLink  to='/'>Order More</NavBtnLink>
		</NavBtn> */}
		
	</div>

);}




export {Navbar1,Navbar2,Navbar3,Navc};

import React from 'react'
import './header.css'
import logo from './logo.png'

function Header() {
	return (
		<header style={{width: '100%', backgroundColor: 'rgba(0,0,0,.75)'}}>
			<div className="header">
				<h2>Weather App</h2>
				<img src={logo} alt="logo"/>
			</div>
		</header>
	);
}

export default Header
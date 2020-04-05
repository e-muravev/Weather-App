import React from 'react'
import './header.css'
import logo from './logo.png'

function Header() {
	return (
		<header style={{width: '100%', backgroundColor: 'rgba(0,0,0,.75)'}}>
			<div className="header">
				<p>Weather App</p>
				<img src={logo} alt="logo"/>
			</div>
		</header>
	);
}

export default Header
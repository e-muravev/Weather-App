import React from 'react'
import './header.css'
import logo from './logo.png'

function Header() {
	return (
		<header className="header">
			<h2>Weather App</h2>
			<img src={logo} alt="logo" style={{width: '30px', paddingBottom: '3px'}}/>
		</header>
	);
}

export default Header
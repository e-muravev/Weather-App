import React from 'react'
import './day.css'
import wind from './wind.png'
import humidity from './humidity.png'

function Day({ day }) {
	return (
		<div className="Day">
			<div className="main-info-about-day">
				<p style={{fontWeight: 'bold'}}>{day.date}</p>
					<div className="temp">
						<p>{
							`${(day.day.mintemp_c < 0) ? day.day.mintemp_c : ("+" + day.day.mintemp_c) }°C 
							 ${(day.day.maxtemp_c < 0) ? day.day.maxtemp_c : ("+" + day.day.maxtemp_c)}°C`
						}</p>
					</div>
					<div className="wind">
						<img src={wind} alt='wind' width="20px"/>
						<p>: {day.day.maxwind_kph} kph</p>
					</div>
					<div className="humidity">
						<img src={humidity} alt='humidity' width="15px" height="15px"/>
						<p>: {day.day.avghumidity}%</p>
					</div>
					<p className="condition">{day.day.condition.text}</p>
					<img className="this-is-only-for-mobile-and-tablet img" src={day.day.condition.icon} alt="condition img" />
				</div>
				<img className="this-is-only-for-screen img" src={day.day.condition.icon} alt="condition img"/>
			</div>
	);
}

export default Day
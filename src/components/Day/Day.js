import React from 'react'
import './day.css'
import wind from './wind.png'
import humidity from './humidity.png'

function Day({ day, dayValue, bugAPI }) {
	
	let dayName = ''
	switch (dayValue) {
		case 0:
			dayName = 'Sunday'
			break
		case 1:
			dayName = 'Monday'
			break
		case 2: 
			dayName = 'Tuesday'
			break
		case 3: 
			dayName = 'Wednesday' 
			break
		case 4: 
			dayName = 'Thursday'
			break
		case 5:
			dayName = 'Friday'
			break
		case 6: 
			dayName = 'Saturday'
			break
		default:
			break
	}
	
	return (
		<div className="Day">
			<div className="main-info-about-day">
				<p style={{fontWeight: 'bold'}}>{dayName}</p>
					<div className="temp">
						<p>{
							(!bugAPI) ? `${(day.day.mintemp_c < 0) ? day.day.mintemp_c.toFixed(1) : ("+" + day.day.mintemp_c.toFixed(1)) }°C 
							 ${(day.day.maxtemp_c < 0) ? day.day.maxtemp_c.toFixed(1) : ("+" + day.day.maxtemp_c.toFixed(1))}°C` 
							 :
							 `${(day.day.mintemp_c < 0) ? (+(day.day.mintemp_c + 2).toFixed(1)) : ("+" + (+day.day.mintemp_c + 2).toFixed(1)) }°C 
							 ${(day.day.maxtemp_c < 0) ? (+(day.day.maxtemp_c + 2).toFixed(1)) : ("+" + (+day.day.maxtemp_c + 2).toFixed(1))}°C`
						}</p>
					</div>
					<div className="wind">
						<img src={wind} alt='wind' width="20px"/>
						{
							(!bugAPI) ? <p>: {day.day.maxwind_kph.toFixed(1)} kph</p> : <p>: {(16 - 2).toFixed(1)} kph</p>
						}
					</div>
					<div className="humidity">
						<img src={humidity} alt='humidity' width="15px" height="15px"/>
						{
							(!bugAPI) ? <p>: {day.day.avghumidity.toFixed(1)}%</p> : <p>: {(day.day.avghumidity - 4).toFixed(1)}%</p>
						}
					</div>
					<p className="condition">{day.day.condition.text}</p>
					<img className="this-is-only-for-mobile-and-tablet img" src={day.day.condition.icon} alt="condition img" />
				</div>
				<img className="this-is-only-for-screen img" src={day.day.condition.icon} alt="condition img"/>
			</div>
	);
}

export default Day
import React from 'react'
import './weatherfield.css'
import moon from './moon.png'
import wind from './wind.png'
import humidity from './humidity.png'
import pressure from './pressure.png'
import Day from '../Day/Day'

function WeatherField({ weather, forecast }) {
	
	
	if (weather.location && forecast.forecast)
	{
		
		const dayValue = new Date().getDay() + 1

		return(
		<div className="weatherField">
			<div className="currentWeather">
				<p style={{fontSize: '1.1rem'}}>{weather.location.name + ', ' + weather.location.country}</p>
				<div className="temperature">
					<p>{weather.current.temp_c}°C</p>
					<div >
						<div>
							<img src={(weather.current.condition.text==='Clear') ? moon : weather.current.condition.icon } alt="condition img" width='45px'/>
							<p style={{marginTop: '0', fontSize: '1rem', paddingLeft: '5px'}}>{weather.current.condition.text}</p>
						</div>
						<p>Feels like: {weather.current.feelslike_c}°C</p>
					</div>
				</div>
				<div className="footerWeather">
					<div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
						<img src={wind} alt='wind' width="35px" heigth="50px"/>
						<p style={{padding: '0'}}>: {weather.current.wind_kph} kph</p>
					</div>
					<div style={{display: 'flex', justifyContent: 'center', alignItems:'center'}}>
						<img src={pressure} alt='pressure' width="25px" height="21px"/>
						<p style={{padding: '0'}}> : {weather.current.pressure_mb} mb</p>
					</div>
					<div style={{display: 'flex', justifyContent: 'center', alignItems:'center'}}>
						<img src={humidity} alt='humidity' width="20px" height="20px"/>
						<p style={{padding: '0'}}>: {weather.current.humidity} %</p>
					</div>
				</div>
			</div>
			<div className="forecast">
				{forecast.forecast.forecastday.map((day, i) => (<Day key={i} bugAPI={false} day={day} dayValue={dayValue+i}/>))}
				{
					forecast.forecast.forecastday.length === 3 ?
					forecast.forecast.forecastday.reverse().map((day, i) => (<Day key={i} bugAPI={true} day={day} dayValue={dayValue+i+3}/>)):
					null
				}
			</div>
		</div>
		);
	}
	return null;
	
}

export default WeatherField
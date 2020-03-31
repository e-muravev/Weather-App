import React, {useReducer, useEffect} from 'react';
import './App.css';
import Header from './components/Header/Header'
import SearchField from './components/SearchField/SearchField'
import WeatherField from './components/WeatherField/WeatherField'

const API_KEY = '44f9ba0e2fa544569ce113811201303'
const default_city = 'New York'

const initialState = {
  weatherLoaded: false,
  forecastLoaded: false,
  ErrorMessage: null,
  weather: {},
  forecast: {}
}

const searchCurrentWeather = () => ({
  type: "SEARCH_CURRENT_WEATHER_REQUEST",
})

const searchForecast = () => ({
  type: "SEARCH_FORECAST_REQUEST",
})

const searchCurrentWeatherSuccess = (weather) => ({
  type: "SEARCH_CURRENT_WEATHER_SUCCESS",
  weather
})

const searchCurrentWatherFailure = (error) => ({
  type: "SEARCH_CURRENT_WEATHER_FAILURE",
  error
})

const searchForecastSuccess = (forecast) => ({
  type: "SEARCH_FORECAST_SUCCESS",
  forecast
})

const searchForecastFailure = () => ({
  type: "SEARCH_FORECAST_FAILURE",
})

const reducer = (state, action) => {
  console.log(action)
  switch (action.type) {
    case "SEARCH_CURRENT_WEATHER_REQUEST":
      return {
        ...state,
        weatherLoaded: false,
        errorMessage: null
      }
    case "SEARCH_FORECAST_REQUEST":
      return {
        ...state,
        forecastLoaded: false
      }
    case "SEARCH_CURRENT_WEATHER_SUCCESS":
      return {
        ...state,
        weather: action.weather,
        weatherLoaded: true
      }
    case "SEARCH_CURRENT_WEATHER_FAILURE":
      return {
        ...state,
        errorMessage: action.error,
        weatherLoaded: false
      }
    case "SEARCH_FORECAST_SUCCESS": 
      return {
        ...state,
        forecast: action.forecast,
        forecastLoaded: true
      }
    case "SEARCH_FORECAST_FAILURE":
      return {
        ...state,
        forecastLoaded: false
      }
    default: 
      return state
  }

}

function App() {
  
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch(searchCurrentWeather())
    fetch(`http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${default_city}`)
      .then(response => response.json())
      .then(data => {
        if(data.current) { dispatch(searchCurrentWeatherSuccess(data)) }
        else { dispatch(searchCurrentWatherFailure(data)) }
      })
    dispatch(searchForecast())
    fetch(`http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${default_city}&days=7`)
      .then(response => response.json())
      .then(data => { 
        if(data.forecast) { dispatch(searchForecastSuccess(data)) }
        else { dispatch(searchForecastFailure()) }
      })
  }, [])

  const search = (searchValue) => {

    dispatch(searchCurrentWeather())
    fetch(`http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${searchValue}`)
      .then(response => response.json())
      .then(data => {
        if(data.current) { dispatch(searchCurrentWeatherSuccess(data)) }
        else { dispatch(searchCurrentWatherFailure(data.error.message)) }
      })
    dispatch(searchForecast())
    fetch(`http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${searchValue}&days=7`)
      .then(response => response.json())
      .then(data => { 
        if(data.forecast) { dispatch(searchForecastSuccess(data)) }
        else { dispatch(searchForecastFailure()) }
      })
  }

  const { weather, forecast, errorMessage } = state


  return (
    <div className="App">
      <Header/>
      <SearchField search={search}/>
      {errorMessage ? <h1 style={{marginTop: '4rem'}}>{errorMessage}</h1> : <WeatherField weather={weather} forecast={forecast}/>}
    </div>
  );
}

export default App;

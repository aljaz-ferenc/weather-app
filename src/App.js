import './App.css';
import Overview from './components/Overview';
import Sunset from './components/Sunset';
import Forecast from './components/Forecast';
import Wind from './components/Wind';
import { useEffect, useState } from 'react'

function App() {
  const [city, setCity] = useState('ljubljana')
  const [inputCity, setInputCity] = useState()
  const [coords, setCoords] = useState({ lon: 46.0500268, lat: 14.5069289 })
  const [weatherData, setWeatherData] = useState()
  const [forecast, setForecast] = useState()
  const [language, setLanguage] = useState('en')
  const [currentDate, setCurrentDate] = useState()
  const [currentTime, setCurrentTime] = useState()
  const [display, setDisplay]  = useState(false)

  const API_KEY = '07a43d5ef147868f0d6a3c55290c10b4'
  const URL_GEO = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${API_KEY}`
  const URL_WEATHER = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&units=metric&lang=${language}&appid=${API_KEY}`
  const URL_FORECAST = `https://api.openweathermap.org/data/2.5/forecast?lat=${coords.lat}&lon=${coords.lon}&units=metric&lang=${language}&appid=${API_KEY}`

  useEffect(() => {
    fetch(URL_GEO)
      .then(response => response.json())
      .then(data => {
        setCoords({ lon: data[0].lon, lat: data[0].lat })
      })
  }, [city])

  useEffect(() => {
    fetch(URL_WEATHER)
      .then(response => response.json())
      .then(data => {
        setWeatherData(data)
      })
  }, [coords])

  useEffect(() => {
    fetch(URL_FORECAST)
      .then(response => response.json())
      .then(data => {
        setForecast(data)
      })
  }, [coords])

  useEffect(()=> {
    if(forecast){
      setDisplay(true)
    }
  },[forecast])

  function handleInputCity(e) {
    if(e.target.value === '') return
    setInputCity(e.target.value)
  }

  function handleSubmitCity(e) {
    e.preventDefault()
    setCity(inputCity)
    e.target.value = ''
  }

  setInterval(() => {
    setCurrentTime(new Date().getHours().toString().padStart(2, '0') + ':' + new Date().getMinutes().toString().padStart(2, '0'))
    setCurrentDate(new Date().toLocaleDateString())
  }, 1000);

  return (
    <div className="App">
      <div className={display ? 'content' : 'content hidden'}>
        <div className='time'><span>{currentTime}</span><span>{currentDate}</span></div>
        <Overview weatherData={weatherData && weatherData} city={forecast && forecast.city.name} handleSubmitCity={handleSubmitCity} handleInputCity={handleInputCity} />
        <Forecast forecast={forecast && forecast} />
        <Wind weatherData={weatherData && weatherData} />
        <Sunset weatherData={weatherData && weatherData} />
      </div>
    </div>
  );
}

export default App;
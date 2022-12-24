import React from 'react'
import './Wind.css'

export default function Wind({ weatherData }) {
  return (
    <div className='wind__container'>
      <h2>Wind</h2>
      <img alt='wind icon' src={require('../icons/wind.svg')} />
      <div>Speed: {weatherData && weatherData.wind.speed}</div>
      <div>Deg: {weatherData && weatherData.wind.deg}</div>
    </div>
  )
}

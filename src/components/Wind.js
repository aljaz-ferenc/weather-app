import React from 'react'
import './Wind.css'
import icon from '../icons/wind.svg'

export default function Wind({ weatherData }) {
  return (
    <div className='wind__container'>
      <h2>Wind</h2>
      <img alt='wind icon' src={icon} className='wind__logo' />
      <div className='wind__data'>
        <div>Speed: <span className='bold'>{weatherData && weatherData.wind.speed}</span> m/s</div>
        <div>Degrees: <span className='bold'>{weatherData && weatherData.wind.deg}</span>&#176;</div>
      </div>
    </div>
  )
}

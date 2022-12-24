import React from 'react'
import './Sunset.css'

export default function Sunset({weatherData}) {

const timeRise = new Date(weatherData && weatherData.sys.sunrise * 1000)
const timeSet = new Date(weatherData && weatherData.sys.sunset * 1000)

  return (
    <div className='sun__container'>
        <div className='sun__sunrise'>
            <h2>Sunrise</h2>
            <img className='sunrise-img' alt='sunrise' src={require('../icons/sunrise.png')}/>
            <div className='time__container'>
            <span className='bold'>{timeRise.toLocaleTimeString()}</span>
            </div>
        </div>
        <div className='sun__sunset'>
            <h2>Sunset</h2>
            <img className='sunset-img' alt='sunset' src={require('../icons/sunset.png')}/>
            <div className='time__container'>
            <span className='bold'>{timeSet.toLocaleTimeString()}</span>
            </div>
        </div>
    </div>
  )
}

import React from 'react'

export default function Sunset({weatherData}) {

const timeRise = new Date(weatherData && weatherData.sys.sunrise * 1000)
const timeSet = new Date(weatherData && weatherData.sys.sunset * 1000)

  return (
    <div className='sun'>
        <div className='sun__sunrise'>
            <h2>Sunrise</h2>
            <div className='time__container'>
            <span>{timeRise.getHours().toString().padStart(2, '0')}</span>:
            <span>{timeSet.getMinutes().toString().padStart(2, '0')}</span>
            </div>
        </div>
        <div className='sun__sunset'>
            <h2>Sunset</h2>
            <div className='time__container'>
            <span>{timeSet.getHours().toString().padStart(2, '0')}</span>:
            <span>{timeSet.getMinutes().toString().padStart(2, '0')}</span>
            </div>
        </div>
    </div>
  )
}

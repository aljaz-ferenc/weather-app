import React from 'react'
import './Day.css'

export default function Day({ date, weather, icon, temperature}) {
    const options = { weekday: 'short' }
    const formattedDate = new Intl.DateTimeFormat('en-US', options).format(date * 1000)

    return (
        <div className='day__container'>
            <div className='day__date'>{date && formattedDate}</div>
            <div className='day__icon'><img alt='weather icon' src={require(`../icons/${icon}.png.svg`)} /></div>
            <div className='day__weather-main'>{weather && weather.charAt(0).toUpperCase() + weather.slice(1)}</div>
            <div className='day__temperature'>{temperature && temperature.toFixed(1)}&#8451;</div>
        </div>
    )
}

import React from 'react'
import './Day.css'

export default function Day({ date, weather, icon, temperature, cloudiness, wind}) {
    const weekdayOptions = { weekday: 'short' }
    const weekday = new Intl.DateTimeFormat('en-US', weekdayOptions).format(date * 1000)
    const dateNumeric = new Intl.DateTimeFormat('en-US').format(date * 1000)

    return (
        <div className='day__container'>
            <div className='day__date'>{date && weekday}</div>
            <div className='day__date'>{date && dateNumeric.slice(0, -5)}</div>
            <div className='day__icon'><img alt='weather icon' src={require(`../icons/${icon}.png.svg`)} /></div>
            <div className='day__weather-main'>{weather && weather}</div>
            <div className='day__temperature bold divider'>{temperature && temperature.toFixed(1)}&#8451;</div>
            <div className='day__cloudiness divider'>Clouds: <span className='bold'>{cloudiness}&#x25;</span></div>
            <div className='day__wind divider'>
                <span>Wind:</span>
                <div><span className='bold'>{wind.speed}</span>m/s</div>
                <span className='bold'>{wind.deg}&#176;</span>
            </div>
        </div>
    )
}

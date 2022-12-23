import React, { useEffect, useState } from 'react'
import Search from './Search'
import Temperature from './Temperature'
import './Overview.css'

export default function Overview({handleSubmitCity, handleInputCity, city, weatherData}) {

    return (
        <div className='overview'>
        <Search handleSubmitCity={handleSubmitCity} handleInputCity={handleInputCity}/>
            <h2 className='overview__city'>{city && city}</h2>
            <div className='overview__main'>
                <p className='overview__main--weather'>{weatherData && weatherData.weather[0].main}</p>
                <p className='overview__main--description'>({weatherData && weatherData.weather[0].description})</p>  
                <p className='overview__main--icon'>IMAGE</p>
            </div>
            <Temperature temperature={weatherData && weatherData.main}/>
        </div>
    )
}

import React, { useEffect, useState } from 'react'
import './Forecast.css'
import Day from './Day'

export default function Forecast({ forecast }) {
  const [days, setDays] = useState([])
  const [filteredDays, setFilteredDays] = useState()

  useEffect(() => {
    if (forecast) {
      setDays(forecast.list)
    }
  }, [forecast])

  useEffect(() => {
    if (days) {
      setFilteredDays(days.filter(day => day.dt_txt.endsWith('12:00:00')))
    }
  }, [days])

  return (
    <div className='forecast__container'>
      {filteredDays && filteredDays.map((day, index) => {
        return (
          <Day key={index} date={day.dt} weather={day.weather[0].description} icon={day.weather[0].icon}/>
        )
      })}
    </div>
  )
}

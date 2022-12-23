import React from 'react'

export default function Temperature({temperature}) {
  return (
    <div className='temperature'>
        <div>Temperature: {temperature && temperature.temp}</div>
        <div>Feels like: {temperature && temperature.feels_like}</div>
        <div>Max temp: {temperature && temperature.temp_min}</div>
        <div>Min temp: {temperature && temperature.temp_max}</div>
    </div>
  )
}

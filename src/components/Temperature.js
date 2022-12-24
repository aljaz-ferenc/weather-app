import React from 'react'
import './Temperature.css'

export default function Temperature({temperature}) {
  return (
    <div className='temperature'>
        <div><span className='data'>{temperature && temperature.temp.toFixed(1)}&#8451;</span></div>
        <div className='min-max'>
        <div className='min'><span className='label'>Min</span><span className='data'>{temperature && temperature.temp_min.toFixed(1)}&#8451;</span></div>
        <div className='max'><span className='label'>Max</span><span className='data'>{temperature && temperature.temp_max.toFixed(1)}&#8451;</span></div>
        </div>
        <div className='feels-like'><span>Feels like: </span><span className='bold'>{temperature && temperature.feels_like.toFixed(1)}&#8451;</span></div>
    </div>
  )
}
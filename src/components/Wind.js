import React from 'react'

export default function Wind({ weatherData }) {
  return (
    <div>
      <h2>Wind</h2>
      <div>Speed: {weatherData && weatherData.wind.speed}</div>
      <div>Deg: {weatherData && weatherData.wind.deg}</div>
    </div>
  )
}

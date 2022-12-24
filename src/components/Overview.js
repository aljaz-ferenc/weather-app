import Search from './Search'
import Temperature from './Temperature'
import './Overview.css'

export default function Overview({ handleSubmitCity, handleInputCity, city, weatherData }) {

    return (
        <div className='overview'>
            <Search handleSubmitCity={handleSubmitCity} handleInputCity={handleInputCity} />
            <h2 className='overview__city'>{city && city}</h2>
            <div className='overview__main'>
                {/* <p className='overview__main--weather'>{weatherData && weatherData.weather[0].main}</p> */}
                <div className='overview__main--icon'><img alt='weather icon' src={weatherData && require(`../icons/${weatherData.weather[0].icon}.png.svg`)} /></div>
                <p className='overview__main--description'>{weatherData && weatherData.weather[0].description.charAt(0).toUpperCase() + weatherData.weather[0].description.slice(1)}</p>
            </div>
            <Temperature temperature={weatherData && weatherData.main} />
            <div className='humidity'>Humidity: {weatherData && weatherData.main.humidity}&#x25;</div>
        </div>
    )
}
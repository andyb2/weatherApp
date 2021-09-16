import React from "react"
import './index.css'

const Weather = (props) => {
    const { weatherData } = props
    console.log(weatherData)
    return (
        <div className="weatherBox">

            {weatherData && (
                <>
                    <h2>{weatherData.weatherRequest.name}, {weatherData.weatherRequest.sys.country}</h2>
                    <h3>Temperature:</h3>
                    <div> {Math.round(280.9 - 273.15).toFixed(0)}</div>
                    <div>Sunrise: {`${new Date(weatherData.oneCallWeather.current.sunrise * 1000).toLocaleTimeString()}`}</div>
                    <div>Sunset: {`${new Date(weatherData.oneCallWeather.current.sunset * 1000).toLocaleTimeString()}`}</div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div>{weatherData.weatherRequest.weather[0].description}</div>
                    <div>{<img src={`http://openweathermap.org/img/wn/${weatherData.weatherRequest.weather[0].icon}@2x.png`} className="card-img-top" alt="Weather Icon" />}</div>
                </>
            )}
        </div>
    )
}
export default Weather


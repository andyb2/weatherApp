import React from "react"
import './index.css'
const Weather = (props) => {
    const { weatherData } = props
    console.log(weatherData)
    return (
        <div className="weatherBox">
            <h2>Toronto</h2>
            {/* {weatherData && ( */}
            <>
                {/* <h2>Toronto</h2> */}
                {/* <h2>{weatherData.name}, {weatherData.sys.country}</h2>
                    <h3>Temperature:</h3>
                    <div> {Math.round(280.9 - 273.15).toFixed(0)}</div>
                    <div>{weatherData.weather[0].description}</div>
                    <div>{<img src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} className="card-img-top" alt="Weather Icon" />}</div> */}
            </>
            {/* )} */}
        </div>
    )
}
export default Weather
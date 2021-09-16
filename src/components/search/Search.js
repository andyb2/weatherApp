import React, { useState, useEffect } from "react"
import Weather from "../weather/Weather";
import './index.css'

const Search = () => {

    const [searched, setSearched] = useState('');
    // const [geoState, setGeoState] = useState()
    const [weatherData, setWeatherData] = useState();

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Weather request used for getting the lat and lon of the search
        // console.log(searched.trim().length)
        if (searched === '') {
            console.error(`Please enter a city`)
        } else {
            const weatherRequest = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${searched}&appid=${process.env.REACT_APP_API_KEY}`,
            ).then(r => r.json());
            console.log(weatherRequest)
            // weatherRequest lat and lon is then passed into oneCallWeather to receive additional weather information
            if (!weatherRequest.message) {
                const oneCallWeather = await fetch(
                    `https://api.openweathermap.org/data/2.5/onecall?lat=${weatherRequest.coord.lat}&lon=${weatherRequest.coord.lon}&appid=${process.env.REACT_APP_API_KEY}`,
                ).then(r => r.json());
                setWeatherData({ weatherRequest, oneCallWeather })
            } else {
                console.error(weatherRequest.cod, weatherRequest.message)
                // alert(weatherRequest.message)
            }
        }
    }
    const handleChange = async (event) => {
        setSearched((event.target.value).trim())
    }
    console.log(searched)
    return (

        <div className="container">
            <section className="test">
                <form onSubmit={handleSubmit}>
                    <input className='searchBar' type='text' onChange={handleChange} />
                    {/* <div className={geoState ? 'dropDownMenu' : null}>
                        {geoState && geoState.map(e => <div className='autoFillSearch' key={e.city} onClick={clickLocation}>{e.city}</div>)}
                    </div> */}
                </form>
                <Weather weatherData={weatherData !== undefined ? weatherData : null} />
            </section>
        </div>
    )
}

export default Search;
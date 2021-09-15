import React, { useState, useEffect } from "react"
import Weather from "../weather/Weather";
import './index.css'

const Search = () => {

    const [searched, setSearched] = useState('');
    const [geoState, setGeoState] = useState()
    const [weatherData, setWeatherData] = useState()

    const handleSubmit = async (e) => {
        e.preventDefault();

        const weatherRequest = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${searched}&appid=${process.env.REACT_APP_API_KEY}`,
        ).then(r => r.json())
        console.log(weatherRequest)
        // const test = await fetch(
        //     `https://api.openweathermap.org/data/2.5/onecall?lat=${weatherRequest.coord.lat}&lon=${weatherRequest.coord.lon}&appid=${process.env.REACT_APP_API_KEY}`,
        // ).then(r => r.json())

        if (weatherRequest.cod !== '404') {
            setWeatherData(weatherRequest)
        } else {
            console.error(weatherRequest.cod, weatherRequest.message)
        }
    }
    const handleChange = async (event) => {
        setSearched(event.target.value)

        dynamicSearch(event.target.value);
    }
    console.log(searched)
    const dynamicSearch = async (value) => {
        // const geoCode = await fetch(
        //     `http://api.openweathermap.org/geo/1.0/direct?q=${test}&limit=5&appid=${process.env.REACT_APP_API_KEY}`
        // ).then(r => r.json());
        // setGeoState(test)
        if (value !== '') {
            setGeoState([
                { city: 'aurora, CA' },
                { city: 'aurora, GB' },
                { city: 'aurora, US' },
                { city: 'aurora, MX' },
            ])
        } else {
            setGeoState()
        }
    }
    console.log(geoState)

    const clickLocation = (e) => {
        console.log(e.target.textContent)
        setGeoState()
    }

    return (

        <div className="container">
            <section className="test">
                <form onSubmit={handleSubmit}>
                    <input className='searchBar' type='text' onChange={handleChange} />
                    <div className={geoState ? 'dropDownMenu' : null}>
                        {geoState && geoState.map(e => <div className='autoFillSearch' key={e.city} onClick={clickLocation}>{e.city}</div>)}
                    </div>
                </form>
                <Weather weatherData={weatherData} />
            </section>
        </div>
    )
}

export default Search;
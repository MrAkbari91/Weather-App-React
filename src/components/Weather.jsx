import React from "../../weather app/node_modules/@types/react";

const Weather = ({ weatherData }) => {
    return (
        <div>
            <h2 className="city">{weatherData.name}, {weatherData.sys.country}</h2>
            <h4 className="desc">{weatherData.weather[0].description}</h4>
            <img src={`https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`} alt="Weather Icon" />
            <h1 className="temp">{weatherData.main.temp} °C</h1>
            <div className="temp-container">
                <div>
                    <h4 className="title">Lowest Temperature</h4>
                    <h4 className="temp">{weatherData.main.temp_min} °C</h4>
                </div>
                <div>
                    <h4 className="title">Highest Temperature</h4>
                    <h4 className="temp">{weatherData.main.temp_max} °C</h4>
                </div>
            </div>
        </div >
    )
}

export default Weather;
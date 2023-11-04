import React from "react";

const Weather = ({ weatherData }) => {

    const windDirStyle = {
        transform: `rotate(${weatherData.wind.deg + 90}deg)`,
    };
    return (
        <div className="weather-data">
            <h2 className="city">{weatherData.name}, {weatherData.sys.country}</h2>
            <h4 className="weather">{weatherData.weather[0].description}</h4>
            <img src={`https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`} alt="Weather Icon" />
            <h1 className="temp">{weatherData.main.temp} °C</h1>
            <div className="temp-container">
                <div className="feature">
                    <h4 className="title">Lowest Temperature</h4>
                    <p className="desc">{weatherData.main.temp_min} °C</p>
                </div>
                <div className="feature">
                    <h4 className="title">Highest Temperature</h4>
                    <p className="desc">{weatherData.main.temp_max} °C</p>
                </div>
                <div className="feature">
                    <h4 className="title">Humidity</h4>
                    <p className="desc">{weatherData.main.humidity} %</p>
                </div>
                <div className="feature">
                    <h4 className="title">Wind Speed</h4>
                    <p className="desc">{weatherData.wind.speed} km/h, {weatherData.wind.deg}°</p>
                </div>
            </div>
        </div >
    )
}

export default Weather;
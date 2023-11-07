import React from "react";

const Weather = ({ weatherData }) => {

    const windDirStyle = {
        transform: `rotate(${weatherData.wind.deg + 90}deg)`,
    };
    const date = new Date(weatherData.dt * 1000);

    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        hour12: true, // To display time in 12-hour format with AM/PM
    };
    const formattedDate = date.toLocaleDateString('en-US', options);
    return (
        <div className="weather-data">

            <h2 className="city mb-0 mx-0 my-2 text-3xl text-white uppercase font-semibold tracking-widest">{weatherData.name}, {weatherData.sys.country}</h2>

            <p className="text-white date text-sm tracking-widest my-3">{formattedDate}</p>

            <p className="temp mt-0 mx-0 text-white text-6xl">{weatherData.main.temp} °C</p>

            <div className="flex justify-center">
                <img src={`https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`} alt="Weather Icon" className=" mb-0 mx-0 w-24 mt-1 drop-shadow-md" />
            </div>
            <p className="weather text-white uppercase tracking-widest text-base mb-5">{weatherData.weather[0].description}</p>

            <div className="temp-container flex flex-wrap justify-center gap-4">
                <div className="border w-[48%] p-4 rounded-lg border-b border-r border-white/10 bg-gradient-to-r from-slate-900/30 to-slate-700/10">
                    <h4 className="text-white tracking-wider">Lowest Temperature</h4>
                    <p className="text-white uppercase tracking-widest text-base text-bolder">{weatherData.main.temp_min} °C</p>
                </div>
                <div className="border w-[48%] p-4 rounded-lg border-b border-r border-white/10 bg-gradient-to-r from-slate-900/30 to-slate-700/10">
                    <h4 className="text-white tracking-wider">Highest Temperature</h4>
                    <p className="text-white uppercase tracking-widest text-base text-bolder">{weatherData.main.temp_max} °C</p>
                </div>
                <div className="border w-[48%] p-4 rounded-lg border-b border-r border-white/10 bg-gradient-to-r from-slate-900/30 to-slate-700/10">
                    <h4 className="text-white tracking-wider">Humidity</h4>
                    <p className="text-white uppercase tracking-widest text-base text-bolder">{weatherData.main.humidity} %</p>
                </div>
                <div className="border w-[48%] p-4 rounded-lg border-b border-r border-white/10 bg-gradient-to-r from-slate-900/30 to-slate-700/10">
                    <h4 className="text-white tracking-wider">Wind Speed</h4>
                    <p className="text-white uppercase tracking-widest text-base text-bolder">{weatherData.wind.speed} km/h, {weatherData.wind.deg}°</p>
                </div>
            </div>
        </div >
    )
}

export default Weather;
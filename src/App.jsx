import './App.css';
import React, { useState, useEffect } from '../weather app/node_modules/@types/react';
import axios from '../weather app/node_modules/axios';
import Weather from './components/Weather.jsx';


function App() {
  const API_KEY = 'ca799e241c694d886db7c9f33b5dbedd';
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  const fetchWeatherData = async (cityName) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`
      );
      console.log(weatherData);
      setWeatherData(response.data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  useEffect(() => {
    axios.get('https://ipapi.co/json/').then((response) => {
      const userCity = response.data.city;
      if (userCity) {
        fetchWeatherData(userCity);
      }
    });
  }, []);

  const handleCityChange = (e) => {
    const cityName = e.target.value;
    setCity(cityName);
  };

  const handleSearch = () => {
    if (city) {
      fetchWeatherData(city);
    }
  };

  return (
    <div className="App">
      <div className="wrapper">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="container">
          <div className="search-container">
            <input
              type="text"
              placeholder="Enter city"
              id="city"
              value={city}
              onChange={handleCityChange}
            />
            <button onClick={handleSearch}>Search</button>
          </div>
          {weatherData &&  <Weather weatherData={weatherData} />}
        </div>
      </div>
    </div>
  );
}

export default App;

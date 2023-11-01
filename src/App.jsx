import './assets/css/App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Weather from './components/Weather';
import WeatherForm from './components/WeatherForm';
import useApiRequests from './components/useApiRequests';


const App = () => {
  // const API_KEY = 'ca799e241c694d886db7c9f33b5dbedd';
  const [errorMsg, setErrorMsg] = useState("");
  const [units, setUnits] = useState("metric");
  const [city, setCity] = useState('');

  const { error, weatherData } = useApiRequests(city);
  useEffect(() => {
    fetch('https://ipapi.co/json/')
      .then(response => response.json())
      .then(data => {
        const userCity = data.city;
        setCity(userCity);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });

  }, []);

  useEffect(() => {
    if (error) {
      setErrorMsg(error);
    }
  }, [error]);

  const handleCityChange = (e) => {
    const cityName = e.target.value;
    setCity(cityName);
  };

  const handleSearch = (city) => {
    if (city) {
      setCity(city);
    }
  };

  return (
    <div className="App">
      <div className="wrapper">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="container">
          <WeatherForm onSubmit={handleSearch} />
          {weatherData && Object.keys(weatherData).length > 0 && (<Weather weatherData={weatherData} />)}
        </div>
      </div>
    </div>
  );
}

export default App;

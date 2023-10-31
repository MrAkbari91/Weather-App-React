import './assets/css/App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Weather from './components/Weather';
import WeatherForm from './components/WeatherForm';



function App() {
  const API_KEY = 'ca799e241c694d886db7c9f33b5dbedd';
  const [errorMsg, setErrorMsg] = useState("");
  const [units, setUnits] = useState("metric");
  const [city, setCity] = useState('');

  const { error, locationData, weatherData } = useApiRequests(prompt);


  // const fetchWeatherData = async (cityName) => {
  //   try {
  //     const response = await axios.get(
  //       `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`
  //     );
  //     console.log(weatherData);
  //     setWeatherData(response.data);
  //   } catch (error) {
  //     console.error('Error fetching weather data:', error);
  //   }
  // };

  useEffect(() => {
    axios.get('https://ipapi.co/json/').then((response) => {
      const userCity = response.data.city;
      if (userCity) {
        fetchWeatherData(userCity);
      }
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
      fetchWeatherData(city);
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
          {weatherData && <Weather weatherData={weatherData} />}
        </div>
      </div>
    </div>
  );
}

export default App;

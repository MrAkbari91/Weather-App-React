import './assets/css/App.css';
import React, { useState, useEffect } from 'react';
import Weather from './components/Weather';
import WeatherForm from './components/WeatherForm';
import useApiRequests from './components/useApiRequests';


const App = () => {

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

  const handleSearch = (city) => {
    if (city) {
      setCity(city);
    }
  };

  return (
    <div className="App">
      <div className="wrapper absolute text-base w-[90vw] max-w-[30em] -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4 max-w-md:text-sm">

        <div className="shape shape-1 absolute border-2 border-solid h-44 w-44 right-[-6.5em] top-[1.8em] rounded-full border-white/10 bg-white/25 backdrop-blur-xl"></div>

        <div className="shape shape-2 absolute border-2 border-solid h-48 w-48 bottom-[-3.7em] left-[-2.5em] rounded-full border-white/10 bg-white/25 backdrop-blur-xl"></div>

        <div className="container w-full text-center px-7 py-12 rounded-2xl border-2 border-solid border-white/10 bg-white/10 drop-shadow-md backdrop-blur-md">

          <WeatherForm onSubmit={handleSearch} />
          {weatherData && Object.keys(weatherData).length > 0 && (<Weather weatherData={weatherData} />)}
        </div>
      </div>
    </div>
  );
}

export default App;

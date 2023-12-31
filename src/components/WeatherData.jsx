import PropTypes from "prop-types";

const WeatherData = async (cityName) => {
    try {
        const API_KEY = 'ca799e241c694d886db7c9f33b5dbedd'
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`);
        const weatherData = await response.json();
        return weatherData;
    } catch (error) {
        console.error('Error fetching weather data:', error);
        return await Promise.reject("Unable to fetch weather data.", error);
    }

}
WeatherData.propTypes = {
    locationData: PropTypes.string.isRequired,
};

export default WeatherData
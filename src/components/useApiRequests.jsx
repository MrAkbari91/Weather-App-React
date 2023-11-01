import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import WeatherData from "./WeatherData";

const useApiRequests = (city) => {
    const [error, setError] = useState(null);
    const [weatherData, setWeatherData] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            if (!city) return; // return if city if null or undifined

            try {
                // const LocationToCoordinatesResponse = await LocationToCoordinates(city);
                // setLocationDataCoordinates(LocationToCoordinatesResponse);

                const weatherDataResponce = await WeatherData(city);
                setWeatherData(weatherDataResponce);

            } catch (error) {
                setError(error);
                console.log("error", error);
            }
        };
        fetchData();
    }, [city]);
    return { error, weatherData };
}
useApiRequests.propTypes = {
    prompt: PropTypes.string.isRequired,
};

export default useApiRequests;
import PropTypes from "prop-types";

const LocationToCoordinates = async (cityName) => {
    const API_KEY = "ca799e241c694d886db7c9f33b5dbedd";
    try {
        const response = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&APPID=${API_KEY}`);
        const locationData = await response.json();
        if (locationData.length === 0) {
            throw new Error("No location by that name. Try again.");
        }
        return locationData;
    } catch (error) {
        console.error('Error fetching location data:', error);
        return await Promise.reject(error);
    }
};

LocationToCoordinates.propTypes = {
    location: PropTypes.string.isRequired,
};

export default LocationToCoordinates;
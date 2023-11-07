import React, { useState } from "react";
import PropTypes from "prop-types";


const WeatherForm = ({ onSubmit }) => {

    const [city, setCity] = useState('');

    const handleCityChange = (e) => {
        setCity(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(city);
    };

    return (
        <form onSubmit={handleSubmit} className="search-container mt-0 mx-0 mb-6 text-base grid grid grid-cols-3 gap-4">
            <input
                type="text"
                placeholder="Enter City"
                id="city"
                value={city}
                onChange={handleCityChange}
                className="bg-transparent text-white p-3 border-b-2 border-solid font-light col-span-2 outline-none text-base border-white/10 border-0 focus:border-white placeholder:text-white"
            />
            <input type="submit" value="search" className="border text-white cursor-pointer rounded-lg border-solid p-3 outline-none text-base border-white/10 bg-gray-300/20" />
        </form>
    )
}

WeatherForm.propTypes = {
    onSubmit: PropTypes.func,
};

export default WeatherForm
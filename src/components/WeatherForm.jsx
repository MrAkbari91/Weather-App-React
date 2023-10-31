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
            <form onSubmit={handleSubmit} className="search-container">
                <input
                    type="text"
                    placeholder="City, state code (if USA), country code"
                    id="city"
                    value={city}
                    onChange={handleCityChange}
                />
                <input type="submit" value="search" id="search-btn" />

                {/* <button type="submit" id='search-btn'>Search</button> */}
            </form>
        )
    }

    WeatherForm.propTypes = {
        onSubmit: PropTypes.func,
    };

    export default WeatherForm
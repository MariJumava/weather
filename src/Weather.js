import React from "react";
import WeatherThteeDays from "./WeatherThreeDays";
import WeatherToday from "./WeatherToday";

const Weather = ({ cityId, coord }) => {
    return (
        <div className="weather">
            <WeatherToday cityId={cityId} coord={coord} />
            <WeatherThteeDays cityId={cityId} coord={coord}/>
        </div>
    )
}

export default Weather;
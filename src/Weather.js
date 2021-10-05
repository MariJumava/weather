import React from "react";
import WeatherThteeDays from "./WeatherThreeDays";
import WeatherTomorrow from "./WeatherTomorrow";

const Weather = () => {
    return (
        <div className="weather">
            <WeatherTomorrow />
            <WeatherThteeDays />
        </div>
    )
}

export default Weather;
import React, { useState } from "react";
import axios from "axios";

export default function Search() {
  let [city, SetCity] = useState("");
  let [loaded, SetLoaded] = useState(false);
  let [weather, setWeather] = useState({});

  function DisplayWeather(response) {
    SetLoaded(true);
    setWeather({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
    });
  }

  function showWeather(event) {
    event.preventDefault();
    let apiKey = "50fa4024e3b1d5eac2f51ab18a47e997";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(DisplayWeather);
  }

  function refreshCity(event) {
    SetCity(event.target.value);
  }

  if (loaded) {
    return (
      <>
        <input type="search" placeholder="Search" onChange={refreshCity} />
        <input type="submit" value="Search" onClick={showWeather} />
        <ul>
          <li>
            The Temperature in {city} is: {Math.round(weather.temperature)}°C
          </li>
          <li> With: {weather.description.toLocaleUpperCase()} </li>
          <li>Humidity: {Math.round(weather.humidity)}% </li>
          <li>Wind: {Math.round(weather.wind)}km/h </li>
          <li>
            <img src={weather.icon} alt={weather.description} />
          </li>
        </ul>
      </>
    );
  } else {
    return (
      <>
        <input type="search" placeholder="Search" onChange={refreshCity} />
        <input type="submit" value="Search" onClick={showWeather} />
      </>
    );
  }
}

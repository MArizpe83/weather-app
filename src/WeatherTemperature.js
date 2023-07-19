import React, { useState } from "react";
import "./Weather.css";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function showFarenheit(event) {
    event.preventDefault();
    setUnit("farenheit");
  }

  if (unit === "celsius") {
    return (
      <span className="WeatherTemperature">
        <span className="temp">{Math.round(props.celsius)}</span>
        <span className="units">
          °C|
          <a href="/" onClick={showFarenheit}>
            °F
          </a>
        </span>
      </span>
    );
  } else {
    let farenheit = (props.celsius * 9) / 5 + 32;
    return (
      <span className="WeatherTemperature">
        <span className="temp">{Math.round(farenheit)}</span>
        <span className="units">
          <a href="/" onClick={showCelsius}>
            °C
          </a>
          |°F
        </span>
      </span>
    );
  }
}

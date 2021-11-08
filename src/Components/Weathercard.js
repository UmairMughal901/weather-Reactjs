import React, { useState, useEffect } from "react";

const Weathercard = ({ tempInfo }) => {
  const [weatherIcon, setweatherIcon] = useState("");

  

  //Destructing of Data
  const {
    temp,
    pressure,
    humidity,
    weatherMode,
    cityName,
    speed,
    country,
    sunset,
  } = tempInfo;


  //useEffect hook
  useEffect(() => {
    if (weatherMode) {
      switch (weatherMode) {
        case "Sunny":
          setweatherIcon("wi-day-sunny");
          break;

        case "Fog":
          setweatherIcon("wi-day-fog");
          break;

        case "Smoke":
          setweatherIcon("wi-smoke");
          break;

          case "Clouds":
          setweatherIcon("wi-cloudy");
          break;

          case "Haze":
            setweatherIcon("wi-day-haze");
            break;

            case "Rain":
            setweatherIcon("wi-day-rain");
            break;

        default:
          setweatherIcon("wi-day-sunny");
          break;
      }
    }
  }, [weatherMode]);

  //convert sunset value into time
  let sec = sunset;
  let date = new Date(sec * 1000); //we need milisecs
  let timeStr = `${date.getHours()}:${date.getMinutes()}`;

  return (
    <>
      <article className="widget">
        <div className="weatherIcon">
          <i className={`wi ${weatherIcon}`}></i>
        </div>
        <div className="weatherInfo">
          <div className="temperature">
            <span>{temp}&deg;</span>
          </div>
          <div className="description">
            <div className="weatherCondition">{weatherMode}</div>
            <div className="place">
              {cityName}, {country}
            </div>
          </div>
        </div>
        <div className="date">{new Date().toLocaleString()}</div>

        {/* our 4 divided section */}
        <div className="extra-temp">
          <div className="temp-info-minmax">
            <div className="two-sided-section">
              <p>
                <i className={"wi wi-sunset"}></i>
              </p>
              <p className="extra-info-leftside">
                {timeStr}
                <br />
                Sunset
              </p>
            </div>
            <div className="two-sided-section">
              <p>
                <i className={"wi wi-humidity"}></i>
              </p>
              <p className="extra-info-leftside">
                {humidity}
                <br />
                Humidity
              </p>
            </div>
          </div>
          <div className="weather-extra-info">
            <div className="two-sided-section">
              <p>
                <i className={"wi wi-direction-down"}></i>
              </p>
              <p className="extra-info-leftside">
                {pressure}
                <br />
                Pressure
              </p>
            </div>
            <div className="two-sided-section">
              <p>
                <i className={"wi wi-strong-wind"}></i>
              </p>
              <p className="extra-info-leftside">
                {speed}
                <br />
                Speed
              </p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default Weathercard;

import React, { useState, useEffect } from "react";
import "../CSS/ThapaWeather.css";
import Weathercard from "./Weathercard";

const Temp = () => {
  const [searchValue, setsearchValue] = useState("Lahore");
  //
  const [tempInfo, settempInfo] = useState({});


  const getWatherInfo = async () => {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=8ea3800ca0044a040f1ba2614f3d22d8`;

      const res = await fetch(url);

      const data = await res.json();
      ///console.log(data);

      //Data Destructring
      const { temp, pressure, humidity } = data.main;
      const { main: weatherMode } = data.weather[0];
      const { name: cityName } = data;
      const { speed } = data.wind;
      const { country, sunset } = data.sys;

      //create an object put all declared variables in it
      const newWeatherInfo = {
        temp,
        pressure,
        humidity,
        weatherMode,
        cityName,
        speed,
        country,
        sunset,
      } ;

      settempInfo(newWeatherInfo);
      
    } catch (error) {
      console.log(error);
    }
  };

  //agar app chahtay ho k page load p he koi function run ho jye to use useEffect hook
  useEffect(() => {
    getWatherInfo();
  },[]);

  return (
    <>
      <div className="wrap">
        <div className="search">
          <input
            type="search"
            placeholder={searchValue}
            autoFocus
            id="search"
            className="searchTerm"
            //value= { }
            //yeh nichy wali statement main jo bhe use likhay ga woh value is main aye gee triky point here.
            onChange={(e) => setsearchValue(e.target.value)}
          />
          <button
            className="searchButton"
            type="button"
            onClick={getWatherInfo}
          >
            Search
          </button>
        </div>
      </div>

      {/* Main Card for weather information */}
      <Weathercard tempInfo={tempInfo}/>
    </>
  );
};

export default Temp;

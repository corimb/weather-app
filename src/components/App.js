import React, { useState } from 'react';
import getDataFromApi from '../services/api';
// import Data from './Data';

import '../css/App.css';

const App = () => {
  
  const [searchCity, setSearchCity] = useState("");
  const searchCityValue = event => {setSearchCity(event.target.value)};

  const [weatherData, setWeatherData] = useState("");
  console.log(weatherData)

  function submit () {
    getDataFromApi(searchCity, 'en').then(data => {setWeatherData(data)});
  }

  function keyValue (value) {
    let name;
    switch (value){
      case 'feels_like':
        name = 'feels like ';
      break;
      case 'temp_min':
        name = 'min ';
      break;
      case 'temp_max':
        name = 'max ';
      break;
      case 'pressure':
        name = 'pressure ';
      break;
      case 'humidity':
        name = 'humidity ';
      break;
      default: 
        name = ''
    }
    return name
  }

  function heySufix (value) {
    let sufix;
    switch (value){
      case 'temp':
      case 'feels_like':
      case 'temp_min':
      case 'temp_max':
        sufix = 'ºC';
      break;
      case 'pressure':
        sufix = 'pHa';
        break;
      case 'humidity':
        sufix = '%';
        break;
      default: 
        sufix = ''
    }
    return sufix;
  }

  
  return (
    <div className='App'>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <label htmlFor='search'>City</label>
        <input id='search' type='text' value={searchCity} onChange={searchCityValue}></input>
        <button type='submit' onClick={submit}>
          Search
        </button>
      </form>
      <ul>
      <li>
        {
        weatherData ? (
          <div>
           {weatherData.weather[0].description}
            {Object.keys(weatherData.main).map((key, i) => (
              <p key={i}>
                {<span>{keyValue(key)}</span>}
                <span>{weatherData.main[key]}{heySufix(key)}</span>
              </p>
            ))}
            {weatherData.name}
          </div>
          ) : null
        } 
      </li>
      </ul>
    </div>   
  );
};

export default App;

import React, { useState } from 'react';
import getDataFromApi from '../services/api';

import Icons from './Icons';
import minIcon from '../images/cold.svg';
import maxIcon from '../images/hot.svg';
import humidityIcon from '../images/humidity.svg';
import pressureIcon from '../images/meter.svg';
import '../style/App.scss';

const App = () => {
  
  const [searchCity, setSearchCity] = useState("");
  const searchCityValue = event => {setSearchCity(event.target.value)};

  const [weatherData, setWeatherData] = useState("");
  console.log(weatherData)

  function submit () {
    getDataFromApi(searchCity, 'en').then(data => {setWeatherData(data)});
  }

  return (
    <div className='App'>
      <h1>Check the weather!</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      className="form">
          <label htmlFor='search'>City</label>
          <input id='search' type='text' value={searchCity} onChange={searchCityValue}></input>
          <button className="btn" type='submit' onClick={submit}>
            Search
          </button>
      </form>
      
        {
        weatherData.cod === 200 ? (
          <>
            <section className="top-container">
            <Icons 
            iconId={weatherData.weather.map(item => {return item.id})} 
            sunrise={weatherData.sys.sunrise} 
            sunset={weatherData.sys.sunset}/>
              <article>
                      <h3>{weatherData.weather.map(item =>{return item.description})}</h3>
                      <h2>{Math.floor(weatherData.main.temp)}ºC</h2>
                      <p>{Math.floor(weatherData.main.feels_like)}ºC feels like</p>
                      <h4>{weatherData.name}</h4>
              </article>
            </section>
            <section className="bottom-container">
                <article>
                    <div><img src={minIcon} alt="min temp icon"></img></div>
                    <div>{Math.floor(weatherData.main.temp_min)}ºC</div>
                </article>
                <article>
                    <div><img src={maxIcon} alt="max temp icon"></img></div>
                    <div>{Math.floor(weatherData.main.temp_max)}ºC</div>
                </article>
                <article>
                    <div><img src={humidityIcon} alt="humidity icon"></img></div>
                    <div>{weatherData.main.humidity}%</div>
                </article>
                <article>
                    <div><img src={pressureIcon} alt="pressure icon"></img></div>
                    <div>{weatherData.main.pressure}pHa</div>
                </article>
            </section>
          </>
          ) : null
        }
        {weatherData.cod === '404' ? (
                <div className="not-found">
                    <h2>Ooops! Location not found</h2>
                    <p>Make sure you have typed the name of the city correctly</p>
                </div>
            ) : null} 
    </div>   
  );
};

export default App;


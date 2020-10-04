import CONFIG from '../config.json';

const getDataFromApi = (location, lang) => {
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${CONFIG.API_KEY}&mode=json&units=metric&lang=${lang}`
  )
    .then((response) => response.json())
    .then((data) => {
      return data.results;
    });
};

export default getDataFromApi;

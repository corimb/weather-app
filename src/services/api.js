import CONFIG from '../config.json';

export const getDataFromApi = (location) => {
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${CONFIG.API_KEY}&mode=json&units=metric&lang=en`
  )
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch(error => console.log(error));
};

export const getDataFromApiId = (locationId) => {
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?id=${locationId}&appid=${CONFIG.API_KEY}&mode=json&units=metric&lang=en`
  )
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch(error => console.log(error));
};

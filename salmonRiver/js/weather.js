const currentURL='https://api.openweathermap.org/data/2.5/weather?id=5596467&units=imperial&APPID=6dda53eb2f27ab16803fca62cb290f2d';

fetch(currentURL)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    let currentTemp = document.getElementsByClassName('temp')[0];
    let icon = document.getElementsByClassName('weatherIcon')[0];
    let current = document.getElementsByClassName('currentConditions')[0];

    currentTemp.textContent = data.main.temp + "°F";

    current.textContent = data.weather[0].description;

    icon.src = 'https://openweathermap.org/img/wn/' + data.weather[0].icon + '.png';
  });
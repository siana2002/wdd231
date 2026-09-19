const currentTemp = document.querySelector("#current-temp");
const weatherDescription = document.querySelector("#weather-desc");
const forecast = document.querySelector("#forecast-container");

const apiKey = "581f5de737a0bbd5d200306c7dddaca2";
const currentURL = "https://api.openweathermap.org/data/2.5/weather?lat=-37.82&lon=145&units=metric&appid=" + apiKey;
const forecastURL = "https://api.openweathermap.org/data/2.5/forecast?lat=-37.82&lon=145&units=metric&appid=" + apiKey;

async function getWeather() {
    const currentResponse = await fetch(currentURL);
    const currentData = await currentResponse.json();

    currentTemp.textContent = currentData.main.temp + "°C";
    weatherDescription.textContent = currentData.weather[0].description;

    const forecastResponse = await fetch(forecastURL);
    const forecastData = await forecastResponse.json();

    const day1 = forecastData.list[8];
    const day2 = forecastData.list[16];
    const day3 = forecastData.list[24];

    forecast.innerHTML = `
    <p>Day 1: ${day1.main.temp} °C</p>
    <p>Day 2: ${day2.main.temp} °C</p>
    <p>Day 3: ${day3.main.temp} °C</p>`;
}

getWeather();
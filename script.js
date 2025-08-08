const input = document.getElementById('cityInput');
const btn = document.getElementById('searchBtn');
const doc = document.querySelector('.container');
const weather = document.getElementById('weatherInfo');
const image = document.querySelector('.img');
const error = document.querySelector('.err');
const humi = document.getElementById('humidity');
const weatherBody = document.querySelector('.weather-body')
const temperature = document.querySelector('.temp');
const windSpeed = document.getElementById('wind');
const descrip = document.querySelector('.description');
const apiKey = '5cfc9c87123a9c7e34fccd2ca0bcaaec';

btn.addEventListener('click', event => {
    checkWeather(input.value);
    event.preventDefault();
});

async function checkWeather(city) {

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`

    const weatherData = await fetch(`${url}`).then(response => response.json());

    console.log(weatherData);

    if(weatherData.cod === '404'){
        error.style.display = 'flex';
        weatherBody.style.display = 'none';
        return;
    } else {
        weatherBody.style.display = 'flex';
        error.style.display = 'none';
    }
    temperature.innerHTML = `${Math.round(weatherData.main.temp - 273.15)} °C`;

    descrip.innerHTML = `${weatherData.weather[0].description}`;

    humi.innerHTML = `${weatherData.main.humidity}`

    windSpeed.innerHTML = `${weatherData.wind.speed}`;

    switch (weatherData.weather[0].main) {
        case 'Clouds':
            image.src = "/cloud.png";
            break;
        case 'Rain':
            image.src = "/rain.png";
            break;
        case 'Clear':
            image.src = "/clear.png";
            break;
        case 'Mist':
            image.src = "/mist.png";
            break;
        case 'Snow':
            image.src = "/snow.png";
            break;
    }

}

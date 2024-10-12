// weather.js
const apiKey = '7bb16f955a6e4cc6853db6cacde5f39d'; 
const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=Ibadan&appid=${apiKey}&units=metric`;

async function getWeather() {
    try {
        const response = await fetch(weatherUrl);
        const data = await response.json();
        
        if (response.ok) {
            displayWeather(data);
        } else {
            document.querySelector('.weather-info').innerText = 'Error fetching weather data.';
        }
    } catch (error) {
        document.querySelector('.weather-info').innerText = 'Error fetching weather data.';
    }
}

function displayWeather(data) {
    const weatherInfo = `
        <h3>${data.name}</h3>
        <p>Temperature: ${data.main.temp}°C</p>
        <p>Condition: ${data.weather[0].description}</p>
    `;
    document.querySelector('.weather-info').innerHTML = weatherInfo;
}

getWeather();

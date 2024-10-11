// Static weather data (you can replace this with dynamic API data later)
const weatherData = {
    current: {
        temp: '75°F',
        condition: 'Partly Cloudy',
        high: '85°F',
        low: '52°F',
        humidity: '34%',
        sunrise: '7:30 AM',
        sunset: '8:59 PM'
    },
    forecast: [
        { day: 'Today', temp: '90°F' },
        { day: 'Wednesday', temp: '89°F' },
        { day: 'Thursday', temp: '68°F' }
    ]
};

// Function to display current weather
function displayCurrentWeather() {
    const weatherContainer = document.querySelector('.weather-info');
    weatherContainer.innerHTML = `
        <p>${weatherData.current.temp}</p>
        <p>${weatherData.current.condition}</p>
        <p>High: ${weatherData.current.high}</p>
        <p>Low: ${weatherData.current.low}</p>
        <p>Humidity: ${weatherData.current.humidity}</p>
        <p>Sunrise: ${weatherData.current.sunrise}</p>
        <p>Sunset: ${weatherData.current.sunset}</p>
    `;
}

// Function to display weather forecast
function displayWeatherForecast() {
    const forecastContainer = document.querySelector('.forecast ul');
    forecastContainer.innerHTML = ''; // Clear existing forecast data

    weatherData.forecast.forEach(day => {
        const forecastItem = `<li><strong>${day.day}:</strong> ${day.temp}</li>`;
        forecastContainer.innerHTML += forecastItem;
    });
}

// Initialize weather display on page load
document.addEventListener('DOMContentLoaded', () => {
    displayCurrentWeather();
    displayWeatherForecast();
});

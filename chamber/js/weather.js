document.addEventListener('DOMContentLoaded', () => {
    const apiKey = '7bb16f955a6e4cc6853db6cacde5f39d';
    const city = 'Ibadan'; 
        const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=imperial&appid=${apiKey}`;
    
    // Select weather section
    const weatherSection = document.getElementById('weather');

    // Fetch weather data
    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`API request failed: ${response.status} ${response.statusText}`);
            }
            return response.json();
        })
        .then(data => {
            displayWeather(data);
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            weatherSection.innerHTML = '<p>Error loading weather data. Please try again later.</p>';
        });

    // Function to display weather data
    function displayWeather(data) {
        const currentWeather = data.list[0]; // Current weather
        const forecast = data.list.slice(1, 4); // 3-day forecast

        // Capitalize first letter of each word in weather description
        const description = currentWeather.weather.map(w => 
            w.description.replace(/\b\w/g, l => l.toUpperCase())).join(', ');

        // Display current weather
        weatherSection.innerHTML = `
            <h3>Current Weather</h3>
            <p>Temperature: ${Math.round(currentWeather.main.temp)}°F</p>
            <p>Description: ${description}</p>
            <h4>3-Day Forecast</h4>
        `;

        // Display 3-day forecast
        forecast.forEach(day => {
            const dayDescription = day.weather.map(w => 
                w.description.replace(/\b\w/g, l => l.toUpperCase())).join(', ');

            weatherSection.innerHTML += `
                <p><strong>Day:</strong> ${new Date(day.dt_txt).toLocaleDateString()}<br>
                <strong>Temp:</strong> ${Math.round(day.main.temp)}°F<br>
                <strong>Description:</strong> ${dayDescription}</p>
            `;
        });
    }
});

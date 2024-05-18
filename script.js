document.addEventListener("DOMContentLoaded", function() {
    const weatherDescriptions = ['Sunny', 'Partly Cloudy', 'Cloudy', 'Rainy', 'Snowy'];
    const temperatures = generateRandomData(10, 30, 5);
    const humidities = generateRandomData(40, 90, 5);

    const currentWeatherIndex = Math.floor(Math.random() * weatherDescriptions.length);
    document.getElementById('weather-description').textContent = `Weather: ${weatherDescriptions[currentWeatherIndex]}`;
    document.getElementById('temperature').textContent = `Temperature: ${temperatures[currentWeatherIndex]}°C`;
    document.getElementById('humidity').textContent = `Humidity: ${humidities[currentWeatherIndex]}%`;

    const forecastContainer = document.getElementById('forecast');
    for (let i = 0; i < 5; i++) {
        const forecastElement = document.createElement('div');
        forecastElement.innerHTML = `
            <p><strong>${getDayOfWeek(i)}</strong></p>
            <p>Temperature: ${temperatures[i]}°C</p>
            <p>Weather: ${weatherDescriptions[i]}</p>
        `;
        forecastContainer.appendChild(forecastElement);
    }
});

function generateRandomData(min, max, count) {
    const data = [];
    for (let i = 0; i < count; i++) {
        data.push(Math.floor(Math.random() * (max - min + 1)) + min);
    }
    return data;
}

function getDayOfWeek(offset) {
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const today = new Date().getDay(); 
    return days[(today + offset) % 7];
}


const weatherData = {
    "Hà Nội": {
        temperature: 25,
        humidity: 70,
        windSpeed: 5,
        description: "Có mây",
        icon: "☁️"
    },
    "Hồ Chí Minh": {
        temperature: 32,
        humidity: 75,
        windSpeed: 7,
        description: "Nắng",
        icon: "☀️"
    },
    "Đà Nẵng": {
        temperature: 28,
        humidity: 82,
        windSpeed: 12,
        description: "Mưa rào",
        icon: "🌧️"
    }
};
function getWeather() {
    const city = document.getElementById("cityInput").value.trim().toLowerCase();
    const data = weatherData[Object.keys(weatherData).find(key => key.toLowerCase() === city)];
    const result = document.getElementById("weatherResult");
    if (weatherData[city]) {
        const data = weatherData[city];
        result.innerHTML = `
            <div class="weather-info">
                <h2>${city}</h2>
                <div class="icon">${data.icon}</div>
                <div class="temperature">${data.temperature}°C</div>
                <div class="description">${data.description}</div>
                <div>Độ ẩm: ${data.humidity}%</div>
                <div>Tốc độ gió: ${data.windSpeed} km/h</div>
            </div>
        `;
    } else {
        result.innerHTML = `<p>Không tìm thấy thành phố "${city}".</p>`;
    }
}

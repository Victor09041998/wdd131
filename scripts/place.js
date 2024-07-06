document.addEventListener('DOMContentLoaded', () => {
    const temperature = 10; // Example temperature in °C
    const windSpeed = 5; // Example wind speed in km/h

    function calculateWindChill(temp, speed) {
        return 13.12 + 0.6215 * temp - 11.37 * Math.pow(speed, 0.16) + 0.3965 * temp * Math.pow(speed, 0.16);
    }

    if (temperature <= 10 && windSpeed > 4.8) {
        document.getElementById('wind-chill').textContent = calculateWindChill(temperature, windSpeed).toFixed(2) + "°C";
    } else {
        document.getElementById('wind-chill').textContent = "N/A";
    }

    document.getElementById('current-year').textContent = new Date().getFullYear();
    document.getElementById('last-modified').textContent = document.lastModified;
});

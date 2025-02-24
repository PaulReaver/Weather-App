import displayLocation from './displayLocation';
import displayWeatherIcon from './displayWeatherIcon';
import assignDates from './assignDates';

function displayAll(weatherData) {
    displayLocation(weatherData.location); // Displays the current location

    // Displays the current weather icon
    displayWeatherIcon(
        document.querySelector('.today_card img'),
        weatherData.currentWeather.weatherCode,
        weatherData.currentWeather.isDay
    );

    // Displays the current temperature
    document.querySelector('.current_temperature_wrapper h2').textContent =
        `${Math.round(weatherData.currentWeather.temperature_2m)}°`;

    // Displays the current apparent temperature
    document.querySelector('.current_temperature_wrapper p').textContent =
        `Feels like ${Math.round(weatherData.currentWeather.apparentTemperature)}°`;

    assignDates(); // Displays the daily dates

    // Displays daily weather icons
    const dailyIcons = document.querySelectorAll('.daily_card_container img');
    dailyIcons.forEach((img, i) => {
        displayWeatherIcon(img, weatherData.dailyWeather.weather_code[i]);
    });

    // // Displays daily weather temperatures
    const dailyTemperatures = document.querySelectorAll(
        '.daily_card_container p'
    );
    dailyTemperatures.forEach((p, i) => {
        const eachP = p;
        const correctMinTemperature = Math.round(
            weatherData.dailyWeather.temperature_2m_min[i]
        );
        const correctMaxTemperature = Math.round(
            weatherData.dailyWeather.temperature_2m_max[i]
        );
        eachP.textContent = `${correctMinTemperature}° - ${correctMaxTemperature}°`;
    });
}

export default displayAll;

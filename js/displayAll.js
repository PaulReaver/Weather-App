import displayLocation from './displayLocation';
import displayWeatherIcon from './displayWeatherIcon';
import assignDates from './assignDates';

function displayAll(weatherData) {
    displayLocation(weatherData.location);
    displayWeatherIcon(
        document.querySelector('.today_card img'),
        weatherData.currentWeather.weatherCode,
        weatherData.currentWeather.isDay
    );
    document.querySelector('.current_temperature_wrapper h2').textContent =
        `${Math.round(weatherData.currentWeather.temperature_2m)}°`;
    document.querySelector('.current_temperature_wrapper p').textContent =
        `Feels like ${Math.round(weatherData.currentWeather.apparentTemperature)}°`;
    assignDates();
}

export default displayAll;

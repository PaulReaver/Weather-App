import '../css/reset.css';
import '../css/style.css';

import weather from './weather.js';
import constraintValidation from './constraintValidation.js';
import displayLocation from './displayLocation.js';
import displayWeatherIcon from './displayWeatherIcon.js';
import assignDates from './assignDates.js';

// Initial city given and temperature display
async function initializeWeather() {
    try {
        const weatherData = await weather('London');

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
    } catch (error) {
        throw new Error('Error initializing weather');
    }
}

initializeWeather(); // Call the initialization function

// Get a reference to the form searchbox and form
const searchbox = document.getElementById('searchbox');
const myForm = document.querySelector('form');

// Constraint validation to show a custom message
constraintValidation(searchbox);

// Event listener for form submission
myForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    try {
        const weatherData = await weather(searchbox.value);
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
    } catch (error) {
        throw new Error('Error fetching weather');
    }
});

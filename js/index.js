import '../css/reset.css';
import '../css/style.css';

import weather from './weather.js';
import constraintValidation from './constraintValidation.js';
import displayAll from './displayAll.js';

// Initial city given and temperature display with IIFE
(async function initializeWeather() {
    try {
        const weatherData = await weather('London');
        displayAll(weatherData);
    } catch (error) {
        throw new Error('Error initializing weather');
    }
})();

// Get a reference to the form searchbox and form
const searchbox = document.getElementById('searchbox');
const myForm = document.querySelector('form');

// Constraint validation to show a custom message
constraintValidation(searchbox);

// Event listener for form submission
myForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    try {
        const weatherData = await weather(searchbox.value.trim());
        displayAll(weatherData);
    } catch (error) {
        throw new Error('Error fetching weather');
    }
});

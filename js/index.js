import '../css/reset.css';
import '../css/style.css';

import weather from './weather.js';
import constraintValidation from './constraintValidation.js';
import displayLocation from './displayLocation.js';

// Initial city given and temperature display
let weatherData = await weather('London');
displayLocation(weatherData.location);

// Get a reference to the form searchbox
const searchbox = document.querySelector('#searchbox');

// Get a reference to the form
const myForm = document.querySelector('form');

// Constraint validation to show a custom message
constraintValidation(searchbox);

// Pass the searchbox value to get the location weather
myForm.addEventListener('submit', (e) => {
    e.preventDefault();
    (async () => {
        weatherData = await weather(searchbox.value);
        displayLocation(weatherData.location);
    })();
});

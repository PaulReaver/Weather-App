function displayWeatherIcon(weatherImage, weatherCode, isDay) {
    const weatherIcon = weatherImage;

    switch (weatherCode) {
        case 0:
            if (isDay === 1) {
                weatherIcon.src = 'images/weather-icons/0-day.svg';
            } else {
                weatherIcon.src = 'images/weather-icons/0-night.svg';
            }
            break;
        case 1:
            if (isDay === 1) {
                weatherIcon.src = 'images/weather-icons/1-day.svg';
            } else {
                weatherIcon.src = 'images/weather-icons/1-night.svg';
            }
            break;
        case 2:
            if (isDay === 1) {
                weatherIcon.src = 'images/weather-icons/2-day.svg';
            } else {
                weatherIcon.src = 'images/weather-icons/2-night.svg';
            }
            break;
        case 3:
            weatherIcon.src = 'images/weather-icons/3.svg';
            break;
        case 45:
            if (isDay === 1) {
                weatherIcon.src = 'images/weather-icons/45-day.svg';
            } else {
                weatherIcon.src = 'images/weather-icons/45-night.svg';
            }
            break;
        case 48:
            weatherIcon.src = 'images/weather-icons/48.svg';
            break;
        case 51:
            if (isDay === 1) {
                weatherIcon.src = 'images/weather-icons/51-day.svg';
            } else {
                weatherIcon.src = 'images/weather-icons/51-night.svg';
            }
            break;
        case 53:
        case 55:
            weatherIcon.src = 'images/weather-icons/53-55.svg';
            break;
        case 56:
            if (isDay === 1) {
                weatherIcon.src = 'images/weather-icons/56-day.svg';
            } else {
                weatherIcon.src = 'images/weather-icons/56-night.svg';
            }
            break;
        case 57:
            weatherIcon.src = 'images/weather-icons/57.svg';
            break;
        case 61:
        case 80:
            if (isDay === 1) {
                weatherIcon.src = 'images/weather-icons/61-80-day.svg';
            } else {
                weatherIcon.src = 'images/weather-icons/61-80-night.svg';
            }
            break;
        case 63:
        case 65:
        case 81:
        case 82:
            weatherIcon.src = 'images/weather-icons/63-65-81-82.svg';
            break;
        case 66:
            if (isDay === 1) {
                weatherIcon.src = 'images/weather-icons/66-day.svg';
            } else {
                weatherIcon.src = 'images/weather-icons/66-night.svg';
            }
            break;
        case 67:
            weatherIcon.src = 'images/weather-icons/67.svg';
            break;
        case 71:
        case 77:
        case 85:
            if (isDay === 1) {
                weatherIcon.src = 'images/weather-icons/71-77-85-day.svg';
            } else {
                weatherIcon.src = 'images/weather-icons/71-77-85-night.svg';
            }
            break;
        case 73:
        case 75:
            weatherIcon.src = 'images/weather-icons/73-75.svg';
            break;
        case 95:
            weatherIcon.src = 'images/weather-icons/95.svg';
            break;
        case 96:
        case 99:
            weatherIcon.src = 'images/weather-icons/96-99.svg';
            break;
        default:
            break;
    }
}

export default displayWeatherIcon;

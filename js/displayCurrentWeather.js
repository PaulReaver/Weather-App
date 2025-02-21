function displayCurrentWeather(weatherCode) {
    const weatherImage = document.querySelector('.today_card img');

    switch (weatherCode) {
        case 0:
            weatherImage.src = 'images/weather-icons/clear.svg';
            break;
        case 1:
        case 2:
        case 3:
            weatherImage.src = 'images/weather-icons/partly-clear.svg';
            break;
        case 45:
        case 48:
            weatherImage.src = 'images/weather-icons/cloudy.svg';
            break;
        case 51:
        case 53:
        case 55:
        case 56:
        case 57:
        case 80:
        case 81:
        case 82:
            weatherImage.src = 'images/weather-icons/rainy.svg';
            break;
        case 61:
        case 63:
        case 65:
        case 66:
        case 67:
            weatherImage.src = 'images/weather-icons/partly-rainy.svg';
            break;
        case 71:
        case 73:
        case 75:
        case 77:
        case 85:
        case 86:
            weatherImage.src = 'images/weather-icons/partly-snowy.svg';
            break;
        case 95:
        case 96:
        case 99:
            weatherImage.src = 'images/weather-icons/thunder.svg';
            break;
        default:
            break;
    }
}

export default displayCurrentWeather;

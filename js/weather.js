import geocoding from './geocoding.js';

// Async function to fetch weather data based on the city's name
async function weather(cityName) {
    try {
        // Get the latitude and longitude of the city using the geocoding function
        const location = await geocoding(cityName);

        // Fetch weather data from Open Meteo API using the latitude and longitude
        const response = await fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=${location.latitude}&longitude=${location.longitude}&current=temperature_2m,apparent_temperature,weather_code&daily=weather_code,temperature_2m_max,temperature_2m_min&timezone=auto`,
            { mode: 'cors' }
        );

        if (!response.ok) {
            // Check for HTTP errors
            throw new Error('Could not fetch resource');
        }

        // Parse the weather data from the API response
        const data = await response.json();

        const weatherData = {
            location: location.name,
            currentWeather: {
                apparentTemperature: data.current.apparent_temperature,
                temperature_2m: data.current.temperature_2m,
                weatherCode: data.current.weather_code,
            },
            dailyWeather: {
                temperature_2m_max: data.daily.temperature_2m_max,
                temperature_2m_min: data.daily.temperature_2m_min,
                weather_code: data.daily.weather_code,
            },
        };

        return weatherData;
    } catch (error) {
        throw new Error('Could not fetch resource');
    }
}

export default weather;

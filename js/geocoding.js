// Async function to perform geocoding by fetching data for a city name
async function geocoding(city) {
    try {
        // Fetch the geocoding data from Open Meteo API with the given city name
        const response = await fetch(
            `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1&language=en&format=json`,
            { mode: 'cors' }
        );

        if (!response.ok) {
            throw new Error('Could not fetch resource');
        }

        // Parse the JSON data from the API response
        const data = await response.json();

        if (!data.results || data.results.length === 0) {
            // Check if results are empty
            throw new Error(`No results found for ${city}`);
        }

        // Add the city name, latitude, and longitude to the result object
        const location = {
            name: data.results[0].name,
            latitude: data.results[0].latitude,
            longitude: data.results[0].longitude,
        };

        return location;
    } catch (error) {
        throw new Error('Could not fetch resource');
    }
}

export default geocoding;

function displayLocation(city) {
    const locationElement = document.querySelector('h1'); // Get the heading that will display the location
    locationElement.textContent = city;
}

export default displayLocation;

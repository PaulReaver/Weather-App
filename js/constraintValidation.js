function constraintValidation(searchbox) {
    // Constraint validation to show a custom message
    searchbox.addEventListener('invalid', () => {
        searchbox.setCustomValidity('Please enter a location.');
    });

    searchbox.addEventListener('input', () => {
        // Clear message on input
        searchbox.setCustomValidity('');
    });
}

export default constraintValidation;

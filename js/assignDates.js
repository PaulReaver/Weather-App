function assignDates() {
    const dateTitles = document.querySelectorAll('.daily_card_container h3');
    const today = new Date();

    dateTitles.forEach((h3, i) => {
        const futureDate = new Date(today);
        futureDate.setDate(today.getDate() + i + 1); // Increment the date by i days
        const day = futureDate.getDate(); // Get the day number
        const correctDay = day.toString().padStart(2, '0'); // Add zero before month if it is single digit
        const month = futureDate.getMonth() + 1; // Get the month number (1-12)
        const correctMonth = month.toString().padStart(2, '0'); // Add zero before month if it is single digit

        // Set the text content of each <h3> element
        const date = h3;
        date.textContent = `${correctDay}/${correctMonth}`;
    });
}

export default assignDates;

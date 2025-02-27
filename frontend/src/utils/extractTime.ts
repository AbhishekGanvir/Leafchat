export function extractTime(dateString: string) {
    let date = new Date(dateString);

    // If date is invalid, fallback to the current time
    if (isNaN(date.getTime())) {
        date = new Date(); // Use current time
    }

    let hours = date.getHours();
    let minutes = date.getMinutes();
    const period = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12; // Convert to 12-hour format

    return `${padZero(hours)}:${padZero(minutes)} ${period}`;
}

// Helper function to pad single-digit numbers with a leading zero
function padZero(number: number) {
    return number.toString().padStart(2, "0");
}

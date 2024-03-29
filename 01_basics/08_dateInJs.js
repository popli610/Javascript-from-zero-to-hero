// Date Object: Represents a specific point in time
let today = new Date();  // Create a Date object for the current date and time

// Common Date Methods

// toString(): Human-readable string representation
// console.log(today.toString()); // Example: "Thu Mar 30 2024 22:20:22 GMT-0400 (Eastern Standard Time)"

// toDateString(): Weekday, month, day (formatted)
// console.log(today.toDateString()); // Example: "Fri Mar 30 2024"

// toLocaleString(locales, options): Format based on locale/options
// console.log(today.toLocaleString()); // Example: "3/30/2024, 10:20:22 PM" (US English)

// getTime(): Milliseconds since January 1, 1970 (Unix timestamp)
// console.log(today.getTime()); // Example: a large number of milliseconds

// getMonth(): Month as a number (0-11, January is 0)
console.log(today.getMonth() + 1); // Get month (1-12)

// getDay(): Day of the week (0-6, Sunday is 0)
const dayOfWeek = today.getDay();
const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
console.log(dayNames[dayOfWeek]); // Get full day name (e.g., "Thursday")


// Creating Dates

// new Date(): Current date and time
// let today = new Date(); (Already created above)

// new Date(year, month, day, hours, minutes, seconds, milliseconds)
// let specificDate = new Date(2023, 0, 23, 5, 30); // January 23, 2023, 5:30 AM

// new Date(dateString) (Format may vary)
let anotherDate = new Date("2023-01-14"); // Example: 2023-01-14 (YYYY-MM-DD)
console.log(anotherDate.toLocaleString()); // Format based on locale


// Timestamps

// Date.now(): Milliseconds since January 1, 1970 (Unix timestamp)
let timeStamp = Date.now();
console.log(timeStamp); // Example: a large number of milliseconds

// Math.floor(Date.now()/1000): Seconds since January 1, 1970
console.log(Math.floor(Date.now() / 1000)); // Example: a large number


// Extracting and Formatting Date Components

const newDate = new Date();
console.log(newDate); // Output: Current date and time

// Get month (human-readable) and day of the week (full name)
const month = newDate.getMonth() + 1;
const dayName = dayNames[newDate.getDay()];

// Format date and time using toLocaleString() with options
console.log(newDate.toLocaleString('default', {
  weekday: "long",
  hour: 'numeric',
  minute: 'numeric',
  hour12: true  // Use 12-hour format (optional)
}));
// Example output: Thursday, March 30, 2024 at 10:20 PM (Eastern Standard Time)
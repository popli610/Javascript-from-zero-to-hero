// Primitive Number: Simple numeric value
const score = 400;

// Number Object (Less common, inherits from Number constructor)
const balance = new Number(100);

// Common Number Methods

// toString(): Convert number to string
// console.log(balance.toString().length); // Get string length

// toFixed(n): Format number with fixed decimal places
// console.log(balance.toFixed(1)); // Example: "100.0"

// toPrecision(n): Limit significant digits
// const otherNumber = 123.8966;
// console.log(otherNumber.toPrecision(4)); // Example: "123.9"

// toLocaleString(locales): Format according to locale
// const hundreds = 1000000;
// console.log(hundreds.toLocaleString('en-IN')); // Example: "10,00,000" (Indian English)


// Notes on Math Object for Mathematical Operations

// console.log(Math); // Access Math object

// Common Math Methods

// abs(x): Absolute value
// console.log(Math.abs(-4)); // Example: 4

// round(x): Nearest integer
// console.log(Math.round(4.6)); // Example: 5

// ceil(x): Smallest integer greater than or equal to x
// console.log(Math.ceil(4.2)); // Example: 5

// floor(x): Largest integer less than or equal to x
// console.log(Math.floor(4.9)); // Example: 4

// min(x1, x2, ...): Smallest of multiple numbers
// console.log(Math.min(4, 3, 6, 8)); // Example: 3

// max(x1, x2, ...): Largest of multiple numbers
// console.log(Math.max(4, 3, 6, 8)); // Example: 8


// Notes on Generating Random Numbers

// Math.random(): Random decimal between 0 (inclusive) and 1 (exclusive)
console.log(Math.random()); // Example: 0.456789 (random value)

// Generate random number between 1 and 10:
console.log((Math.random() * 10) + 1); // Example: random value between 1 and 10

// Generate random integer between 1 and 10:
console.log(Math.floor(Math.random() * 10) + 1); // Example: random integer between 1 and 10

// Generate random integer within a range:
const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min); // Random integer between min and max

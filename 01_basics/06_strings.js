// String Literals (Simple way to create strings)
const name = "Nishant";
const repoCount = 10;

// String Interpolation (Template literals: preferred for readability)
console.log(`Hello, my name is ${name} and my repo count is ${repoCount}.`); // Use backticks (`)

// String Object Creation (Less common, but useful for accessing methods)
const gameName = new String('nishant-popli-com'); // Not recommended for everyday use

// String Indexing (Access individual characters)
console.log(gameName.charAt(2));  // Access character at index 2 

// String Searching (Find positions of substrings)
console.log(gameName.indexOf('p'));  // Find the index of the first 'p' (3)

// String Extraction (Create new strings from existing ones)
const newString = gameName.substring(0, 4);  // Extract from index 0 (inclusive) to 4 (exclusive)
console.log(newString);

const anotherString = gameName.slice(-8, 4); // Extract from index -8 (from the end) to 4 (not included)
console.log(anotherString);

// String Trimming (Remove leading/trailing whitespace)
const newStringOne = "  nishant   ";
console.log(newStringOne.trim());  // "nishant"

// String Replacement (Substitute parts of a string)
const url = "https://nishant.com/nishant%20popli";
console.log(url.replace('%20', '-'));  // "https://nishant.com/nishant-popli"

// String Searching (Check for substring presence)
console.log(url.includes('javascript'));  // false (doesn't include "javascript")

// String Splitting (Create an array from a string)
console.log(gameName.split('-'));    // ["nishant", "popli", "com"]

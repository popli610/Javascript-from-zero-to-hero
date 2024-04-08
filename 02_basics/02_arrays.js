const marvel_heros = ["thor", "Ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];

// Pushing an entire array into another array (not recommended)
 marvel_heros.push(dc_heros);  // This would create a nested array within marvel_heros
// [ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ] like this

console.log(marvel_heros);  
console.log(marvel_heros[3][1]);  // Accessing an element within the nested array (might be confusing)

// Concatenating Arrays (creating a new array)
const allHeros = marvel_heros.concat(dc_heros);
console.log(allHeros); 

// Spread Operator for Concatenation (modern and preferred)
const all_new_heros = [...marvel_heros, ...dc_heros];
console.log("Combined Heroes (all_new_heros):", all_new_heros);

// Multidimensional Arrays (arrays within arrays)
const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

// Flattening Arrays (removing nested levels)
const real_another_array = another_array.flat(Infinity);
console.log("Flattened Array (real_another_array):", real_another_array);

console.log(Array.isArray("Nishant"));  // Check if "Nishant" is an array (returns false)
console.log(Array.from("Nishant"));    // Convert a string to an array of characters (["N", "i", "s", "h", "a", "n", "t"])
console.log(Array.from({name: "nishant"})); // Convert an object to an array of key-value pairs (["name", "nishant"])

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));  // Create an array from individual elements ([100, 200, 300])

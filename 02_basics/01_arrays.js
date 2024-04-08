// Array

// Create an array named `myArr` containing numbers from 0 to 5
const myArr = [0, 1, 2, 3, 4, 5];

// Create another array named `myHeros` containing superhero names
const myHeros = ["spidey", "batman"];

// Alternatively, create an array using the Array constructor (less common)
const myArr2 = new Array(1, 2, 3, 4);

// Accessing Array Elements
// console.log(myArr[1]);  // Uncomment this line to print the element at index 1 (which is 1)

// Array Methods (commented out for brevity)

// myArr.push(6);   // Add 6 to the end of the array
// myArr.push(7);   // Add 7 to the end of the array (now myArr is [0, 1, 2, 3, 4, 5, 6, 7])
// myArr.pop();    // Remove the last element from the array (now myArr is [0, 1, 2, 3, 4, 5, 6])

// myArr.unshift(9);  // Add 9 to the beginning of the array (now myArr is [9, 0, 1, 2, 3, 4, 5, 6])
// myArr.shift();     // Remove the first element from the array (now myArr is [0, 1, 2, 3, 4, 5, 6])

// myArr.includes(9);  // Check if 9 exists in the array (returns true)
// myArr.indexOf(3);  // Find the index of 3 (returns 2)

// const newArr = myArr.join();  // Convert the array to a comma-separated string (not recommended for modification)

// console.log(myArr);  // Print the original array (useful for debugging)
// console.log(newArr); // Print the string representation (may not be what you intended)

// Slicing and Splicing

console.log("A: Original Array", myArr); // Print the original array

// Create a new array `myn1` containing elements from index 1 (inclusive) to index 3 (exclusive)
const myn1 = myArr.slice(1, 3);

console.log("B: Sliced Array (myn1)", myn1); // Print the sliced array
console.log("C: Modified Original Array (myArr)", myArr); // Print the original array (unchanged by slice)

// Create a new array `myn2` containing elements starting from index 1 (inclusive) and remove those elements from `myArr`
const myn2 = myArr.splice(1, 3);

console.log("D: Spliced Array (myn2)", myn2); // Print the spliced array
console.log("E: Modified Original Array (myArr)", myArr); // Print the original array (modified by splice)



// **splice vs slice** 

// **splice** modifies the original array by extracting a section and optionally adding or removing elements.
// It's useful for in-place editing of the array.

// **slice** extracts a section of the array and creates a new array, leaving the original array unmodified.
// It's useful for copying a portion of the array without affecting the original.

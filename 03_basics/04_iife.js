// Immediately Invoked Function Expressions (IIFE)

// 1. Named IIFE
(function chai() {
    // named IIFE
    console.log(`DB CONNECTED`);
})();

// 2. IIFE with Argument
(function (name) {
    console.log(`DB CONNECTED TWO ${name}`);
})('nishant');


// Additional Notes: Arrow Functions with IIFEs (Modern Approach)

(() => {
    console.log(`DB CONNECTED`);
})();

((name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})('nishant');




// Let's say you have a utility function named `calculateArea`. Without an IIFE, defining this function globally 
// could lead to conflicts if another part of your code uses the same name. By wrapping the function in an IIFE, 
// you can keep the function private and prevent accidental overwrites.

(function () {
    function calculateArea(width, height) {
        return width * height;
    }

    // Use the function within the IIFE
    const area = calculateArea(5, 3);
    console.log("Area:", area);  // Output: Area: 15
})();

// console.log(calculateArea(10, 2));  // ReferenceError: calculateArea is not defined (not accessible outside)

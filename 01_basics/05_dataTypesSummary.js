// Primitive Data Types (Simple Values)

// String: Sequence of characters
const name = "John Doe";

// Number: Numeric values (integers, decimals)
const age = 30;
const pi = 3.14159;

// Boolean: Logical values (true or false)
const isLoggedIn = true;
const isActive = false;

// null: Intentional absence of a value
const unknownValue = null;

// undefined: Variable declared but not assigned
let username;

// Symbol: Unique and immutable identifier
const uniqueId = Symbol('my-symbol');

// BigInt: Large integers (ES2020+)
const bigNumber = 9007199254740991n;

// Reference Data Types (Complex Structures)

// Array: Ordered collection of items
const fruits = ["apple", "banana", "orange"];
const numbers = [1, 2, 3, 4];

// Object: Unordered collection of key-value pairs
const person = {
  name: "Jane",
  age: 25,
  hobbies: ["reading", "coding"]
};

// Function: Block of code designed to perform a task
function greet(name) {
  console.log("Hello, " + name + "!");
}

greet("World");  // Calling the function

console.log(typeof name);       // String (primitive)
console.log(typeof fruits);     // object (reference type for arrays)
console.log(typeof person);     // object (reference type for objects)
console.log(typeof greet);      // function (reference type for functions)
console.log(typeof uniqueId);    // symbol (primitive)
console.log(typeof null);       // object (special case, not actually an object)
console.log(typeof undefined);  // undefined (primitive)
// Object Creation and Properties

// Object Literals (common way to create objects)
const tinderUser = {
    id: "123abc",
    name: "Sammy",
    isLoggedIn: false
  };
  
  // Key points:
  // - Curly braces `{}` define key-value pairs (properties and values).
  // - Keys can be strings or symbols (unique identifiers), values can be any valid data type.
  
  // Less common alternative: Using the new Object() constructor
  // const tinderUser = new Object();  // Uncomment to use this method
  
  // Nested Objects
  const regularUser = {
    email: "some@gmail.com",
    fullname: {
      userfullname: {
        firstname: "nishant",
        lastname: "popli"
      }
    }
  };
  
  console.log(regularUser.fullname.userfullname.firstname);  // Output: "nishant"
  
  // Key point:
  // - Objects can contain other objects as properties.
  // - Access nested properties using dot notation (`.`) with chaining.
  
  // Object Destructuring (modern approach)
  const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "nishant"
  };
  
  const { courseInstructor: instructor } = course;
  
  console.log(instructor);  // Output: "nishant"
  
  // Key point:
  // - Extract properties and give them new names for cleaner variable usage.
  
  
  // Object Methods
  
//   **1. Merging Objects**
  
  const obj1 = { 1: "a", 2: "b" };
  const obj2 = { 3: "a", 4: "b" };
  const obj4 = { 5: "a", 6: "b" };
  
  // Two common approaches:
  
  // a) Spread Syntax (`...`) (modern, preferred)
  const obj3 = { ...obj1, ...obj2, ...obj4 };
  console.log(obj3);  // Output: {1: "a", 2: "b", 3: "a", 4: "b", 5: "a", 6: "b"}
  
  // Key point:
  // - The spread syntax (`...`) expands the iterable objects and merges their properties into a new object (`obj3`).
  // - Properties with the same key from later objects overwrite those from earlier objects.
  
  // b) Object.assign Method (alternative)
  // const obj3 = Object.assign({}, obj1, obj2, obj4); // Using Object.assign
  
  // Key point:
  // - Similar behavior to spread syntax, but less concise.
  
  
//   **2. Arrays and Objects**
  
  const users = [
    { id: 1, email: "popli@gmail.com" },
    { id: 1, email: "popli@gmail.com" },
    { id: 1, email: "popli@gmail.com" }
  ];
  
  users[1].email; // Accesses email property of the second user (index 1)
  
  // Key point:
  // - Access user data within an array of objects using their index and object properties.
  
  
//   **3. Object Utility Methods**
  
  // console.log(Object.keys(tinderUser));   // List of property names (["id", "name", "isLoggedIn"])
  // console.log(Object.values(tinderUser));  // List of property values (["123abc", "Sammy", false])
  // console.log(Object.entries(tinderUser)); // Array of [key, value] pairs (e.g., [["id", "123abc"], ["name", "Sammy"], ["isLoggedIn", false]])
  
  console.log(tinderUser.hasOwnProperty('isLoggedIn')); // Check if a property exists on the object itself (true)
  
  // Key points:
  // - `Object.keys`, `Object.values`, and `Object.entries` are methods for exploring object properties.
  // - `hasOwnProperty` checks if a property exists directly on the object (not inherited).
  
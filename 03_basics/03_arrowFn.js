const user = {
    username: "nishant",
    price: 999,

    welcomeMessage: function () {
        console.log(`${this.username} , welcome to website`);
        console.log(this); // Output: {username: "nishant", price: 999} (the user object)
    }

}
const func = () => {
    let username = "nishant";
    console.log(this);  // Output: Window { ... } (global object in browsers)
};

// Explanation: this Keyword Behavior

// In a method (function defined within an object), 'this' refers to the object itself.
// In this case, user.welcomeMessage(), 'this' refers to the 'user' object.

// In an arrow function or a function defined outside an object, 'this' refers to the global object (window in browsers).
// In this case, func(), 'this' refers to the window object.

// This is why 'user.welcomeMessage()' logs the user object, while 'func()' logs the window object.


// parenthesis or 'return ki kahani'

// const addTwo = (num1, num2) => {
//     return num1 + num2;
// };

// if we are returning in curly braces{} mentioning 'return' is compulsory

// const addTwo = (num1, num2) => num1 + num2; 

// const addTwo = (num1, num2) => (num1 + num2);

// const addTwo = (num1, num2) => ({ username: "nishant" }); // if we are returning an object we must add parenthesis

// console.log(addTwo(3, 4));  // Output: {username: "nishant"}
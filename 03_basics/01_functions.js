// Functions as Building Blocks

// 1. Simple Function (Printing "NISHANT")
function sayMyName() {
    console.log("N");
    console.log("I");
    console.log("S");
    console.log("H");
    console.log("A");
    console.log("N");
    console.log("T");
  }
  
  // Calling the function (executes the code)
  sayMyName();
  
  
  // 2. Function with Parameters (Adding Numbers)
  function addTwoNumbers(number1, number2) {
    // Calculate the sum and implicitly return it (no explicit return statement)
    return number1 + number2;
  }
  
  const result = addTwoNumbers(3, 5);
  console.log("Result:", result);  // Output: Result: 8
  
  
  // 3. Function with Default Parameter and Conditional Logic (Login Message)
  function loginUserMessage(username = "sam") {
    if (!username) {
      console.log("Please enter a username");
      return;  // Early exit if no username provided
    }
    return `${username} just logged in`;
  }
  
  console.log(loginUserMessage("nishant"));  // Output: nishant just logged in
  console.log(loginUserMessage());           // Output: Please enter a username
  
  
  // 4. Function with Rest Parameters (Handling Variable Number of Arguments)
  function calculateCartPrice(val1, val2, ...num1) {
    // ...num1 collects remaining arguments into an array
    return num1;
  }
  
  console.log(calculateCartPrice(200, 400, 500, 2000));  // Output: [500, 2000] (ignores val1 and val2)
  
  
  // 5. Function Working with Objects (Handling User Data)
  const user = {
    username: "nishant",
    price: 199
  };
  
  function handleObject(anyObject) {
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
  }
  
  handleObject(user);  // Output: Username is nishant and price is 199
  handleObject({        // Pass a new object directly
    username: "sam",
    price: 399
  });                   // Output: Username is sam and price is 399
  
  
  // 6. Function with Arrays (Returning Specific Element)
  const myNewArray = [200, 400, 100, 600];
  
  function returnSecondValue(getArray) {
    return getArray[1];
  }
  
  console.log(returnSecondValue(myNewArray));  // Output: 400
  console.log(returnSecondValue([200, 400, 500, 1000]));  // Output: 400 (works with a new array passed)
  
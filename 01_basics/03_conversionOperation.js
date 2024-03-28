let score = "nishant"

//console.log(typeof score);
//console.log(typeof(score));  //both are correct

let valueInNumber = Number(score)
//console.log(typeof valueInNumber); //Number (capital n it is)
//console.log(valueInNumber);


// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0

let isLoggedIn = "nishant"

let booleanIsLoggedIn = Boolean(isLoggedIn)
//  console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "hitesh" => true

let someNumber = 33

let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);


// *********************** Operations ***********************


let value = 3
let negValue = -value
// console.log(negValue);

// Basic arithmetic operations
// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

// String concatenation
let greeting = "hello";
let name = " Nishant";
let fullName = greeting + name;
console.log(fullName);


let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);  //12
// console.log(1 + "2");  //12
// console.log("1" + 2 + 2);  //122
// console.log(1 + 2 + "2");  //32

// console.log((3 + 4) * 5 % 3, " // PEMDAS (parentheses, exponentiation, multiplication/division, addition/subtraction)");


// console.log(+true);
// console.log(+"");
// console.log(+false, " // Converts false to number (0)");    

// Increment/decrement operators
// let num = 5;
// console.log(num++, "  // Post-increment: outputs 5, then num becomes 6");
// console.log(++num, " // Pre-increment: outputs 7 (new value after increment)");

// let num2 = 10;
// console.log(num2--, " // Post-decrement: outputs 10, then num2 becomes 9");
// console.log(--num2, " // Pre-decrement: outputs 8 (new value after decrement)");

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion
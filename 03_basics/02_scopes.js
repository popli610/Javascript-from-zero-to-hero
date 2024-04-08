// Variable Scope (Let vs. Const)

let a = 300;
if (true) {
  let a = 10;  // Block-scoped (different variable from the outer 'a')
  const b = 20;  // Block-scoped (usable only within the if block)
  console.log("INNER: ", a);  // Output: INNER: 10
}

console.log(a);  // Output: 300 (original 'a' is not affected)
// console.log(b);  // ReferenceError: b is not defined (b is out of scope)
// console.log(c);  // ReferenceError: c is not defined (c is not declared)


// Nested Function Scope

function one() {
  const username = "nishant";

  function two() {
    const website = "github";
    console.log(username);  // Output: nishant (accesses 'username' from the outer function)
  }
  // console.log(website);  // ReferenceError: website is not defined (website is out of scope)

  two();
}

one();


// Re-declaration with `const` (Blocked)

if (true) {
  const username = "nishant";  // Declared here
  if (username === "nishant") {
    const username = " youtube";  // Re-declaration not allowed with const
    // console.log(username + website);
  }
  // console.log(website);  // ReferenceError: website is not defined (website is not declared)
}

// console.log(username);  // ReferenceError: username is not defined (const cannot be redeclared)


// Function Expression vs. Declaration

// console.log(addone(5));  // Won't give any error

function addone(num) {
  return num + 1;
}

// addTwo(5);  // This will cause an error because the function is defined after it's called
const addTwo = function(num) {
  return num + 2;
}

console.log("Difference between Function Expression and Declaration:");
console.log("- Function Declaration: Hoisted (treated as declared at the beginning of scope).");
console.log("- Function Expression: Not hoisted. Must be defined before called.");

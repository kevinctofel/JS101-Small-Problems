// Write a function that takes one integer argument, which may be
// positive, negative, or zero. This method returns true if the number's
// absolute value is odd. You may assume that the argument is a valid
// integer value.

// Examples:
// console.log(isOdd(2)); // => false
// console.log(isOdd(5)); // => true
// console.log(isOdd(-17)); // => true
// console.log(isOdd(-8)); // => false
// console.log(isOdd(0)); // => false
// console.log(isOdd(7)); // => true

// Input: integer
// Output: true or false returned

const readline = require('readline-sync');

function checkIfOdd(num) {
  return (Math.abs(num) % 2 === 1);
}

// main app
console.clear();
console.log(`Enter an integer and I'll tell you if it's odd.\n`);

let input = Number(readline.question()); // coerce string input to number

console.log(checkIfOdd(input));
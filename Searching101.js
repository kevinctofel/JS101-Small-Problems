// Write a program that solicits six numbers from the user and logs a message that describes whether the sixth number appears among the first five numbers.

// Enter the 1st number: 25
// Enter the 2nd number: 15
// Enter the 3rd number: 20
// Enter the 4th number: 17
// Enter the 5th number: 23
// Enter the last number: 17

// The number 17 appears in 25,15,20,17,23.

const input = require('readline-sync');

const foundNum = (arr, numToFind) => {
  return (arr.some(value => numToFind === value));
};

const numSearch = () => {

  let numArray = [];

  numArray.push(input.question("Enter the 1st number: "));
  numArray.push(input.question("Enter the 2nd number: "));
  numArray.push(input.question("Enter the 3rd number: "));
  numArray.push(input.question("Enter the 4th number: "));
  numArray.push(input.question("Enter the 5th number: "));
  let lastNum = input.question("Enter the last number: ");

  let isFound = foundNum(numArray, lastNum);

  return (isFound ? `The number ${lastNum} appears in ${numArray.join(',')}. ` : `The number ${lastNum} does not appear in ${numArray.join(',')}. `);

};

console.log(numSearch());
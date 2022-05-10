const multiply = (num1, num2) => {
  return num1 * num2;
};

const square = (numToSquare) => {
  return multiply(numToSquare, numToSquare);
};

console.log(square(5) === 25); // logs true
console.log(square(-8) === 64); // logs true
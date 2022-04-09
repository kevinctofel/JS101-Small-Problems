// Write a program that asks the user to enter an integer greater than 0,
// then asks whether the user wants to determine the sum or the product of
// all numbers between 1 and the entered integer, inclusive.

const input = require('readline-sync');
let intOverZero, sumOrProduct;

const computeSum = (num) => {
  let sum = 0;
  for (let iterator = 1; iterator <= num; iterator++) {
    sum += iterator;
  }
  return sum;
};

const computeProduct = (num) => {
  let product = 1;
  for (let iterator = 1; iterator <= num; iterator++) {
    product *= iterator;
  }
  return product;

};
console.clear();
intOverZero = input.question('Please enter an integer greater than 0: ');
sumOrProduct = input.question('Enter "s" to compute the sum, or "p" to compute the product. ');

if (sumOrProduct === 's') {
  console.log(`The sum of integers between 1 and ${intOverZero} is ${computeSum(intOverZero)}.`);
} else if (sumOrProduct === 'p') {
  console.log(`The product of integers between 1 and ${intOverZero} is ${computeProduct(intOverZero)}.`);
}


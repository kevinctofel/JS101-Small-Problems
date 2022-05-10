const input = require('readline-sync');

let num1 = input.question(`==> Enter the first number:\n`);
let num2 = input.question(`==> Enter the second number:\n`);

console.log(`==> ${num1} + ${num2} = ${num1 + num2}`);
console.log(`==> ${num1} - ${num2} = ${num1 - num2}`);
console.log(`==> ${num1} * ${num2} = ${num1 * num2}`);
console.log(`==> ${num1} / ${num2} = ${num1 / num2}`);
console.log(`==> ${num1} % ${num2} = ${num1 % num2}`);
console.log(`==> ${num1} ** ${num2} = ${BigInt(num1) ** BigInt(num2)}`);


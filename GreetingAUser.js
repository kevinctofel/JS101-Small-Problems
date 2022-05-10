const readLine = require('readline-sync');

let name = readLine.question(`What is your name?\n`);

if (name.endsWith('!')) {
  console.log(`Hello ${name.slice(0, -1)}. Why are we screaming?`.toUpperCase());
} else {
  console.log(`Hello ${name}`);
}

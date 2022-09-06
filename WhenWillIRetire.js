// Build a program that logs when the user will retire and how many more years the user has to work until retirement.

const input = require('readline-sync');

const currYear = () => {
  const now = new Date();
  return now.getFullYear();
};

const whenRetire = () => {
  let age = input.question('What is your age? ');
  let retireAge = input.question('At what age would you like to retire? ');
  let workLeft = retireAge - age;
  console.log(`\nIt's ${currYear()}. You will retire in ${currYear() + workLeft}.`);
  console.log(`You only have ${workLeft} years of work to go!`);
  (currYear());
};

whenRetire();
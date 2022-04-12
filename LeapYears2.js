/* eslint-disable no-trailing-spaces */
/* eslint-disable max-len */

/* In the modern era under the Gregorian Calendar, leap years occur in every year that is evenly divisible by 4, unless the year is also divisible by 100. If the year is evenly divisible by 100, then it is not a leap year, unless the year is also evenly divisible by 400.

Assume this rule is valid for any year greater than year 0. Write a function that takes any year greater than 0 as input and returns true if the year is a leap year, or false if it is not a leap year. */

const isLeapYear = (year) => {
  if (year >= 1752) {
    if (year % 4 === 0 && year % 100 !== 0) {
      return true;
    } else if (year % 400 === 0) {
      return true;
    } else return false;
  } else {
    return (year % 4 === 0);
  }
};

console.log(isLeapYear(1752));
console.log(isLeapYear(100));
console.log(isLeapYear(400));
console.log(isLeapYear(1));
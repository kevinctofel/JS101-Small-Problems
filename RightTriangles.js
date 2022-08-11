/* eslint-disable max-len */
// Write a function that takes a positive integer, n, as an argument and logs a right triangle whose sides each have n stars. The hypotenuse of the triangle (the diagonal side in the images below) should have one end at the lower-left of the triangle, and the other end at the upper-right.
/*
Input: positive integer
Output: Stars displayed
Algo: loop from 1 to n, displaying counter number of stars and n-counter spaces
Note: can console.log each line or concat each line & return one to console.log
*/

const triangle = (num) => {
  for (let count = num - 1; count >= 0; count--) {
    // console.log ("Spaces: " + count + " Stars: " + (num - count)); //test
    console.log((' '.repeat(count) + ('*'.repeat(num - count))));
  }

};

triangle(5);
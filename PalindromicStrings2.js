<<<<<<< HEAD
// Write another function that returns true if the string passed as an argument is a palindrome, or false otherwise. 
// This time, however, your function should be case-insensitive, and should ignore all non-alphanumeric characters

const isRealPalindrome = () => {

  
}
=======
/* eslint-disable indent */
/* eslint-disable max-len */
// Write another function that returns true if the string passed as an argument is a palindrome, or false otherwise. 
// This time, however, your function should be case-insensitive, and should ignore all non-alphanumeric characters. 
// If you wish, you may simplify things by calling the isPalindrome function you wrote in the previous exercise.

import { isPalindrome } from './PalindromicStrings1.js';

const isRealPalindrome = (input) => {
    let searchPattern = new RegExp(/[^a-z0-9]/g);
    let output = input.toLowerCase().replace(searchPattern, '');
    return isPalindrome(output);
};
>>>>>>> 91925f5254d8ac1d857b946df65c0dda803527a4


console.log(isRealPalindrome('madam'));               // true
console.log(isRealPalindrome('Madam'));               // true (case does not matter)
console.log(isRealPalindrome("Madam, I'm Adam"));     // true (only alphanumerics matter)
console.log(isRealPalindrome('356653'));              // true
console.log(isRealPalindrome('356a653'));             // true
console.log(isRealPalindrome('123ab321'));            // false
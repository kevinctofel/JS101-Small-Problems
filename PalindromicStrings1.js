// Write a function that returns true if the string passed as an argument is a palindrome, or false otherwise. 
// A palindrome reads the same forwards and backwards. For this problem, the case matters and all characters matter.

const isPalindrome = (str) => {
  let reverse = str.split('').reverse().join(''); // split into array, reverse it, join back to string

  console.log(str, reverse);

  return (str === reverse);
};


console.log(isPalindrome('Madam'));               // false (case matters)
console.log(isPalindrome('madam'));               // true
console.log(isPalindrome("madam i'm adam"));      // false (all characters matter)
console.log(isPalindrome('356653'));              // true
<<<<<<< HEAD
/* eslint-disable max-len */
// Given a string that consists of some words and an assortment of non-alphabetic characters, write a function that returns that string with all of the non-alphabetic characters replaced by spaces. If one or more non-alphabetic characters occur in a row, you should only have one space in the result (i.e., the result string should never have consecutive spaces).

/*
P: input is a string, output is also a string with non-alphanumeric characters removed / replaced by spaces. Multiple spaces are to be one space
E:
D: May need to change string to array and back to string (join)
A:  Convert string to array of individual characters
    Iterate through characters and save alpha-numerics in new string. Add space for non-alpha (only one if multiple non-alphas)
C:

*/

const cleanUp = (origString) => {
  let re = new RegExp(/[^A-Za-z0-9]/g); // RegEx for alphanumerics
  let output = origString.replace(re, " ");
  let result = '';
  console.log(output);
  let outputArray = output.split('');
  for (let index = 0; index < outputArray.length; index++) {
    if (outputArray[index] === ' ') {
      while (outputArray[index + 1] === '') {
        index++;
      }
      result += '';
    }
    result += '';
  }
  return result;
};



cleanUp("---what's my +*& line?");    // " what s my line "
=======
// Given a string that consists of some words and an assortment of non-alphabetic characters, write a function that returns that string with all of the non-alphabetic characters replaced by spaces. If one or more non-alphabetic characters occur in a row, you should only have one space in the result (i.e., the result string should never have consecutive spaces).

const cleanUp = (inputString) => {

    const regex = /[^A-Za-z0-9]/g;
    let cleanString = inputString.replace(regex, " ").split("  ").join("");

    return (`"${cleanString}"`);
}



console.log(cleanUp("---what's my +*& line?"));    // " what s my line "
>>>>>>> 3c3ad17ba7b6ed713e3110b92cfe69c66dcaad18

/* eslint-disable max-len */
// Write a function that takes a string consisting of zero or more space separated words
// and returns an object that shows the number of words of different sizes.Words consist of any sequence of non-space characters.

const wordSizes = (inputString) => {
  let output = {};
  let outputArray = [];
  let inputArray = [];
  inputArray = inputString.split(' ');
  console.log(inputArray);
  inputArray.forEach(element => {
    outputArray.push([String(element.length), 1]);
  });

  console.log(outputArray);
  console.log(output);


};

wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 1, "7": 2 }
wordSizes("What's up doc?");                              // { "2": 1, "4": 1, "6": 1 }
wordSizes('');                                            // {}
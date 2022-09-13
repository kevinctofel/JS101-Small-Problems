/* eslint-disable indent */
// Write a function that takes an array of numbers and returns an array with the same number of elements, 
// but with each element's value being the running total from the original array.

const runningTotal = (inputArr) => {
    // eslint-disable-next-line max-len
    let outputArray = [];
    for (let index = 0; index < inputArr.length; index++) {
        if (index === 0) {
            outputArray.push(inputArr[index]);
        } else {
        outputArray.push(inputArr[index] + outputArray[index - 1]);
        }
    }
    return outputArray;
};


console.log(runningTotal([2, 5, 13]));             // [2, 7, 20]
console.log(runningTotal([14, 11, 7, 15, 20]));    // [14, 25, 32, 47, 67]
console.log(runningTotal([3]));                    // [3]
console.log(runningTotal([]));                     // []
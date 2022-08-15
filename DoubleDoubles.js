// Write a function that returns the number provided as an argument multiplied by two, unless the argument is a double number; otherwise, return the double number as-is.

const twice = (num) => {
    let numString = num.toString();
    let leftNum = numString.slice(0, (numString.length / 2));
    let rightNum = numString.slice((numString.length / 2));

    return (leftNum === rightNum ? num :(num * 2));
}



console.log(twice(37));          // 74 not
console.log(twice(44));          // 44 is
console.log(twice(334433));      // 668866 not
console.log(twice(107));         // 214 not
console.log(twice(3333));        // 3333 is
console.log(twice(7676));        // 7676 is
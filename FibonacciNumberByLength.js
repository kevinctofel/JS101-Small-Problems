// Write a function that calculates and returns the index of the first Fibonacci number that has the number of digits specified by the argument. (The first Fibonacci number has an index of 1.)
const findFibonacciIndexByLength = (input) => {

    let index = 0;

    index = makeFibonnaci(input);
    console.log("index = " + index);
    return index ;
}

const makeFibonnaci = (num) => {
    let fib = [1, 1];
    // let index = 2;
    do {
        fib.push(fib[fib.length - 1] + fib[fib.length - 2]);
        // index++;
        // console.log(fib);
    }
    while (fib.length < 7); // needs to stop when the first num has 'num' digits

    console.log(fib);
    return fib.length;
}

console.log(findFibonacciIndexByLength(2) === 7);    // 1 1 2 3 5 8 13
// findFibonacciIndexByLength(3n) === 12n;   // 1 1 2 3 5 8 13 21 34 55 89 144
// findFibonacciIndexByLength(10n) === 45n;
// findFibonacciIndexByLength(16n) === 74n;
// findFibonacciIndexByLength(100n) === 476n;
// findFibonacciIndexByLength(1000n) === 4782n;
// findFibonacciIndexByLength(10000n) === 47847n;

// The last example may take a minute or so to run.
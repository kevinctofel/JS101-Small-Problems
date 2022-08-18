// Write a function that takes a year as input and returns the century. The return value should be a string that begins with the century number, and ends with 'st', 'nd', 'rd', or 'th' as appropriate for that number.
// New centuries begin in years that end with 01. So, the years 1901 - 2000 comprise the 20th century.

const century = (year) => {

    let centuryCalc = year/100;

    if (0 <= centuryCalc % 1 < 1 && centuryCalc < 100) centuryCalc ++;
    console.log(centuryCalc); // handle first 10 centuries

    
    // while (centuryCalc % 100 <= 100) {
    //         centuryCalc = centuryCalc / 100;
    //         console.log(centuryCalc);
    //     };
    }


console.log(century(2000));        // "20th"
console.log(century(2001));        // "21st"
console.log(century(1965));        // "20th"
console.log(century(256));         // "3rd"
console.log(century(5));           // "1st"
console.log(century(10103));       // "102nd"
console.log(century(1052));        // "11th"
console.log(century(1127));        // "12th"
console.log(century(11201));       // "113th"
// Create a simple tip calculator. The program should prompt for a bill amount 
// and a tip rate. The program must compute the tip, and then log both the tip 
// and the total amount of the bill to the console. You can ignore input 
//validation and assume that the user will enter numbers.

const input = require('readline-sync');
let billAmount, tipRate;

const calculateTip = (billDue, tipPercent) => {
    return billDue * (tipPercent / 100);
}


console.clear()
console.log("Welcome to the tip calculator!\n");
billAmount = Number(input.question('What is the bill amount? '));
tipRate = Number(input.question('What is the tip percentage? '));

console.log(`\nThe tip is $${calculateTip(billAmount, tipRate).toFixed(2)}`);
console.log(`\nThe Total is $${(billAmount + (calculateTip(billAmount, tipRate))).toFixed(2)}`);
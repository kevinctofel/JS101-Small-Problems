// Build a program that asks the user to enter the length and width of a
// room in meters, and then logs the area of the room to the console in
// both square meters and square feet.

// Note: 1 square meter == 10.7639 square feet

const readline = require('readline-sync');

const calcMeters = (length, width) => {
  return length * width;
};

const calcFeet = (length, width) => {
  return length * width * 10.7639;
};

console.clear();
let roomLengthInM = readline.question(`Enter the length of the room in meters: \n`);
let roomWidthInM = readline.question(`Enter the width of the room in meters: \n`);
let areaInM = calcMeters(roomLengthInM, roomWidthInM).toFixed(3);
let areaInFt = calcFeet(roomLengthInM, roomWidthInM).toFixed(3);
console.log(`The area of the room is ${areaInM} square meters (${areaInFt} square feet.)`);

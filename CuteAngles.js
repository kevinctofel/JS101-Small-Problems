/* eslint-disable no-useless-return */
/* eslint-disable max-len */
// eslint-disable-next-line max-len
// Write a function that takes a floating point number representing an angle between 0 and 360 degrees and returns a string representing that angle in degrees, minutes, and seconds. You should use a degree symbol (˚) to represent degrees, a single quote (') to represent minutes, and a double quote (") to represent seconds. There are 60 minutes in a degree, and 60 seconds in a minute.

/*
P: Receive a floating point number. Change it to a string of degrees, minutes and seconds.
E: See below
D: Start with a floating point number; will need to change to a string.
A: Change the number to a string and split it by any decimals. Keep degrees and then divide minutes by 60, then any remaining minutes by 60 secnds. Join string with proper symbols of *, ' and "".
C:


*/

const dms = (angle) => {
  let inputString = String(angle).split('.');
  // console.log(inputString);
  let degrees = inputString[0];
  let minutes = 0;
  if (inputString[1] !== undefined) {
    minutes = inputString[1];
  }
  let convertMinutes = (.01 * minutes * 60);

  let convertSeconds = (convertMinutes % 1) * 60 * .01;

  console.log(degrees + '˚' + Math.trunc(convertMinutes).toFixed() + "'" + convertSeconds + '"');

  return;
};


console.log(dms(30));           // 30°00'00"
console.log(dms(76.73));        // 76°43'48"
console.log(dms(254.6));        // 254°35'59"
// console.log(dms(93.034773));    // 93°02'05"
// console.log(dms(0));            // 0°00'00"
// console.log(dms(360));          // 360°00'00" or 0°00'00"
/* eslint-disable max-len */
// Create a simple madlib program that prompts for a noun, a verb, an adverb, and an adjective, and injects them into a story that you create.

const input = require('readline-sync');

const madlib = (noun, verb, adverb, adjective) => {

  console.log(`Did you buy a ${noun} today? What were you thinking?`);
  console.log(`Hey, I saw a ${adjective} ${noun} ${verb} yesterday.`);
  console.log(`It was moving ${adverb}! `);
};

const getInputs = () => {
  let noun = input.question("Enter a noun: ");
  let verb = input.question("Enter a verb: ");
  let adverb = input.question("Enter an adverb: ");
  let adjective = input.question("Enter an adjective: ");
  madlib(noun, verb, adverb, adjective);
};


getInputs();
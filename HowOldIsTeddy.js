// Build a program that randomly generates Teddy's age, and logs it to the console. Have the age be a random number between 20 and 120 (inclusive).

const ageOfTeddy = () => {

    let age = Math.floor(Math.random() * 100) + 20;

    console.log(`Teddy is ${age} years old!`);

}

ageOfTeddy();




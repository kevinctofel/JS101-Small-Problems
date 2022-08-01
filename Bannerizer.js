// Write a function that will take a short line of text, and write it to the console log within a box.

const logInBox = (text) => {
    let howLong = text.length + 2;
    let topAndBottom = `\n+` + '-'.repeat(howLong) + '+';
    let spaces = `|` + ' '.repeat(howLong) + '|';
    let message = `| ` + text + ' |';

    return `${topAndBottom}\n${spaces}\n${message}\n${spaces}${topAndBottom}`;
}

console.log(logInBox('To boldly go where no one has gone before. -- StarTrek'));
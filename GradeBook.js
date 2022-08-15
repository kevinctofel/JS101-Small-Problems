// Write a function that determines the mean (average) of the three scores passed to it, and returns the letter associated with that grade.

const getGrade = (grade1, grade2, grade3) => {

    let average = ((grade1 + grade2 + grade3) / 3);
    
    return letterGrade(average);
}

const letterGrade = (avg) => {
    switch (true) {
        case avg < 60:
            return "F";
            break;
        case avg < 70:
            return "D";
            break;
        case avg < 80:
            return "C";
            break;
        case avg < 90:
            return "B";
            break;
        default:
            return "A";
    }

    return avg;
}



console.log(getGrade(95, 90, 93));    // "A"
console.log(getGrade(50, 50, 95));    // "D"
console.log(getGrade(75, 82, 95));    // "D"
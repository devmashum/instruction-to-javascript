// var age = 25;

// if (age >= 18) {
//     console.log("you are adult")
// } else {
//     console.log("you are not adult")
// // }

// var Faisal = 80;
// var Ratul = 70;
// var Arefin = 60;


// if (Faisal, Ratul, Arefin >= 80) {
//     console.log("You got A+")
// } else if (Faisal, Ratul, Arefin >= 70) {
//     console.log("You got A")
// }
// else if (Faisal, Ratul, Arefin >= 60) {
//     console.log("You got A-")
// } else {
//     console.log("Fail")
// }

function getGrade(score) {
    if (score >= 80) {
        return 'A';
    } else if (score >= 60) {
        return 'B';
    } else if (score >= 50) {
        return 'C';
    } else if (score >= 40) {
        return 'D';
    } else {
        return 'F';
    }
}

const yourScore = 85;
const tomScore = 66;
const janeScore = 95;
const peterScore = 56;
const johnScore = 40;

const yourGrade = getGrade(yourScore);
const tomGrade = getGrade(tomScore);
const janeGrade = getGrade(janeScore);
const peterGrade = getGrade(peterScore);
const johnGrade = getGrade(johnScore);

console.log(`Your grade: ${yourGrade}`);
console.log(`Tom's grade: ${tomGrade}`);
console.log(`Jane's grade: ${janeGrade}`);
console.log(`Peter's grade: ${peterGrade}`);
console.log(`John's grade: ${johnGrade}`);


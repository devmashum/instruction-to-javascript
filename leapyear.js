function isLeapYear(year) {
    const remainder = year % 4;
    if (remainder === 0) {

        return true;
    }
    else {
        return false;
    }
}

const myLeapYear = isLeapYear(1952);

console.log('My leap Year:', myLeapYear)
const herLeapYear = isLeapYear(1993);

console.log('Her leap year:', herLeapYear)
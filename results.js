function isLeapYear(year) {
    const remainder = year % 4;
    if (remainder === 0) {
        return true;
    } else {
        return false;
    }
}
var myleapYear = isLeapYear(1993);

console.log('is my leap year', myleapYear)

var herleapYear = isLeapYear(1960);

console.log('is her leap year', herleapYear)
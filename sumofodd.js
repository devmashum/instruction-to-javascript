function sumOfOdd(arr) {
    let sum = 0;
    for (let item of arr) {
        if (item % 2 === 1) {
            sum = sum + item;
        }
    }
    return sum;
}
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const total = sumOfOdd(numbers)
console.log(total)


function findlargest(x) {
    let largest = x[0];
    for (let i = 1; i < x.length; i++) {
        const currentItem = x[i]
        if (currentItem > largest) {
            largest = currentItem
        }

    }
    return largest;

}




const arr = [5, 12, 7, 9, 20, 4, 2, 3]

const result = findlargest(arr);
console.log(result)

output: 20
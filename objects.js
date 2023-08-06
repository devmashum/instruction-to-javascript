const shoppingCart = {
    books: 3,
    sunglass: 1,
    keyboard: 5,
    mouse: 1,
    pen: 25,
}

// const keys = Object.keys(shoppingCart);

// console.log(keys);

// const values = Object.values(shoppingCart);

// console.log(values);
for (let i in shoppingCart) {
    console.log(i, shoppingCart[i])



}
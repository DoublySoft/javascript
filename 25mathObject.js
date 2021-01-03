let PI = Math.PI;
let E = Math.E;

console.log(PI);
console.log(E);

let num1 = 10.456789;

console.log(num1);
console.log(Math.round(num1 * 100) / 100);

console.log(Math.floor(num1));

function randomEqual(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log(randomEqual(1, 6));
console.log(randomEqual(500, 1000));

console.log(Math.sqrt(10));

console.log(Math.pow(7, 2));
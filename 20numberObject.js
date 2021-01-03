let a = 10;
let b = new Number(10);

console.log(a === b);
console.log(a == b);

let c = 10.456789;
console.log(c.toFixed(1));
console.log(c.toFixed(2));
console.log(c.toFixed(4));
console.log(c.toFixed(5));
console.log(c.toFixed(10));
console.log(c.toFixed(15));
console.log(c.toFixed(20));

console.log(a);
console.log(a.toPrecision(4));
console.log(a.toPrecision(1));


d = 10;

d *= 1000000000000000;
console.log(d);

d *= 1000000000000000;
console.log(d);

d *= "f";
console.log(d);

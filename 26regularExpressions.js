let reg = RegExp("a");

let reg2 = /a/;

let text = "Hola Mundo";

console.log(text.match(/a/));
console.log(text.match(/^H/));
console.log(text.match(/o$/));
console.log(text.match(/.../));
console.log(text.match(/^.o/));
console.log(text.match(/[0-9]/));
console.log(text.match(/[03856]/));
console.log(text.match(/[a-z]/));
console.log(text.match(/[adsbflnijko]/));
console.log(text.match(/[a-zA-Z]/));
console.log(text.match(/^H[a-z]/));
console.log(text.match(/[aeiou].$/));
console.log(text.match(/[a-zA-Z0-9]/));
console.log(text.match(/\s/));
console.log(text.match(/\w/));
console.log(text.match(/\d/));

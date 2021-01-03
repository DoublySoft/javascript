
let now = new Date();
console.log(now);

let ms = new Date(0);
console.log(ms)

let fix = new Date(2016, 0, 21, 23, 10, 15, 934);
console.log(fix)

console.log(now.getFullYear());
console.log(now.getMonth());
console.log(now.getDate());
console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getSeconds());
console.log(now.getMilliseconds());

console.log(now.getTime());


let start = new Date();

for (let i = 0; i < 15000; i++) {
    console.log("Something");
}

let end = new Date();

console.log(start);
console.log(end);

let difference = end - start;
console.log(difference);

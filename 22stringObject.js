let a = new String("Daniel");
let b = "Gil"

console.log(a);
console.log(a[0]);
console.log(a["1"]);

console.log(a.toUpperCase());
console.log(a.toLowerCase());

let l = "n"
console.log("La letra", l,"está en la posición", a.indexOf(l))
console.log("La última letra", l,"está en la posición", a.lastIndexOf(l))

let c = "Manolito gazmoño";
let name = c.substr(0, c.indexOf(" "));
console.log(name);

let split = c.split(" ");
console.log(split);
console.log(split.length);

// =============================

document.write("Hello World!");

document.write(c.italics());
document.write(c.bold());
document.write(c.strike());
document.write(c.fontcolor("red"));



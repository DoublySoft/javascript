let arr = [5, 4, 3, 2, 1]
console.log(arr);

console.log(arr[0], arr[4], arr[5]);

arr.reverse();
console.log(arr);

arr = arr.map((item) => {
   item *= item;
   return item;
});
console.log(arr);

arr = arr.map(Math.sqrt);
console.log(arr);

arr = arr.join("|");
console.log(arr);

arr = arr.split("|");
console.log(arr);

arr.push("6");
console.log(arr);

arr.unshift("0");
console.log(arr);

console.log(arr.toString());

let del = arr.pop();
console.log(arr, del);

arr.splice(3, 0, "10", "20", "30");
console.log(arr);

arr = arr.slice(0, 4);
console.log(arr);

let car = {
    color: "Blanco",
    brand: "Mazda",
    print: function () {
        return this.brand + " - " + this.color;
    }
}

let car2 = {
    color: "Rojo",
    brand: "Toyota"
}

console.log(car.print());

let logCar = function (arg1, arg2) {
    console.log("Coche:", this.print());
    console.log("Argumentos:", arg1, arg2);
    console.log("=========================");
}

let logModelCar = logCar.bind(car);

logModelCar("abc", "xyz");

logModelCar.call(car, "123", "456");
logModelCar.apply(car, ["asd", "qwe"]);

console.log(car.print.call(car2));
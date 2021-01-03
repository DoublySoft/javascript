function Person() {
    this.name = "Daniel";
    this.lastName = "Gil";
    this.yearsOld = 24;

    this.printInfo = () => {
        return this.name + " " + this.lastName + " (" + this.yearsOld + ")";
    }
}

Person.prototype.country = "Spain";

let dan = new Person();

console.log(dan.printInfo());
console.log(dan.country);

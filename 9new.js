let obj = {}
console.log(obj);

function Person(name, lastName, yearsOld) {
    this.name = name || "Daniel";
    this.lastName = lastName || "Gil";
    this.yearsOld = yearsOld || 24;

    this.fullName = () => {
        return this.name + " " + this.lastName;
    }
}

let person1 = Person();
console.log(person1);

let person2 = new Person();
console.log(person2);

let person3 = new Person("Maria", "Perez");
console.log(person3);

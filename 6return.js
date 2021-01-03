function getRandom() {
    return Math.random();
}

console.log(getRandom())

function getName() {
    return "Daniel";
}

console.log(getName());

let name = getName();
console.log(name);

function isOlder05() {
    if (getRandom() > 0.5) {
        return true;
    } else {
        return false;
    }
}

console.log(isOlder05())

if (isOlder05()) {
    console.log("Es mayor a 0.5");
} else {
    console.log("Es menor a 0.5");
}

function createPerson(name, lastName) {
    return  {
        name: name,
        lastName: lastName
    };
}

console.log(createPerson("Daniel", "Gil"));

function creatFunction() {
    return () => {
        console.log("Función creada desde otra función");
    }
}

let newFunction = creatFunction();
newFunction();

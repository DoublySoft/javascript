
function print(name, lastName) {
    lastName = lastName || "xxx";
    console.log(name + " " + lastName);
}

print("Daniel");
print("Daniel", "Gil");



function printObject(person) {
    console.log(person.name + " " + person.lastName);
}

let person = {
    name: "Daniel",
    lastName: "Gil"
};

printObject(person);



function printFunction(fn) {
    fn();
}

let myFunction = () => {
    console.log("Anonymous funtion")
};

printFunction(myFunction)

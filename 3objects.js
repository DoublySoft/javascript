var person = {
    name: "Juana",
    lastName: "Gil",
    yearsOld: 25,
    address: {
        country: "Spain",
        city: "Madrid",
        building: {
            name: "Principal building",
            phone: "2222-3333"
        }
    }
};

console.log(person.name);
console.log(person.address);

person.address.zipcode = 11101;
console.log(person.address.zipcode);

console.log(person.address.building.phone);

var building = person.address.building;

building.floor = "8º";

console.log(person);

var field = "yearsOld";

console.log(person[field]);
let person = {
    name: "Maria",
    lastName: "Dubon",
    fullName: function () {
        return this.name + " " + this.lastName;
    },
    address: {
        country: "Spain",
        city: "Madrid",
        getCountry: function () {
            var self = this;
            var newAddress = function () {
                console.log(self);
                console.log("La dirección es en " + self.country);
            }
            return this.city + ", " + this.country;
        }
    }
}

console.log(person.fullName());
console.log(person.address.getCountry());

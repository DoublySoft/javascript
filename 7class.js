function a() {
    console.log("Función a");
}

a();

a.nombre = "María";
a.address = {
    country: "Spain",
    city: "Madrid",
    building: {
        floor: "8º",
        name: "Principal floor"
    }
}

console.log(a());
console.log(a.nombre);

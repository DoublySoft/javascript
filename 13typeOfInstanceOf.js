function identified(param) {
    console.log(typeof param);
    if (typeof param == "object") {
        console.log(param instanceof Person);
    }
}

function Person() {

}

let person = new Person();

identified(1);
identified("Hello");
identified(false);
identified(undefined);
identified(null);
identified(function () {
    console.log("Soy anónima");
})
identified(person);

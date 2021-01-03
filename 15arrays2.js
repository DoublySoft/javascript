let arr = [
    true,
    {
        name: "Daniel",
        lastName: "Gil"
    },
    () => {
        console.log("Estoy viviendo en un array");
    },
    (person) => {
        console.log(person.name + " " + person.lastName);
    },
    [
        "Daniel",
        "Carlos",
        "Hernando",
        "Melissa",
        [
            "Juan",
            "Pedro",
            "Dilcia",
            function () {
                console.log(this);
            },
            () => {
                console.log(this);
            },
        ]
    ]
];

console.log(arr);
console.log(arr[0]);
console.log(arr[1].name + " " + arr[1].lastName);

arr[2]();
arr[3](arr[1]);

console.log(arr[4][4][1]);

let arr2 = arr[4][4]
arr2[1] = "Pedra!";

console.log(arr2);
console.log(arr);

arr2[3]();
arr2[4]();

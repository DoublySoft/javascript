// Comentario linea simple

/*
    Comentario multi line
    Comentario multi line
    Comentario multi line
 */

let arr = [
    // Comentario en array
    "Daniel",
    {
        // Comentario en documento de un array
        name: "Daniel",
        lastName: "Gil",
        getName: function () {
            // Comentario en una función
            return this.name + " " + this.lastName;
        }
    },
    true,
    function () {
        console.log(this);
    }
];
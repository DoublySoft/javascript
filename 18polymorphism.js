function determinadoDato(a) {

    if (a === undefined) {
        console.log("A es undefined... no se que hacer");
    }

    if (typeof a === "number") {
        console.log("A es un número, puedo hacer operaciones con números");
    }

    if (typeof a === "string") {
        console.log("A es un texto, puedo hacer operaciones con textos");
    }

    if (typeof a === "object") {
        if (a instanceof Number) {
            console.log("A es un objeto numérico...");
        }
    }

}

determinadoDato(1);

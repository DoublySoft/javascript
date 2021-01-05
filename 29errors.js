try {

    let a = 100;

    // throw "Error tipo 1";
    // throw new Error("Error tipo 2");
    throw {
        type: "Error tipo 3",
        message: "Mensaje del error",
        code: 404
    }
    throw function () {
        console.log("Error tipo 4");
    }

    console.log("El valor de a:", a);

} catch (e) {

    console.log("Error de catch", e)

} finally {

    console.log("Finalmente");

}
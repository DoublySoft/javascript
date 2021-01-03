let arguments = 10;

function myFunction() {

    if (arguments.length !== 4) {
        console.log("La función necesita 4 parametros");
        return;
    }
    console.log(arguments);
}

myFunction(1, "Text", true, undefined, null, [], {}, function () {
}, () => {
});
myFunction(1, "Text", true, undefined);

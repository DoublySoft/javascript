function createFunctions() {

    let arr = [];
    let number = 1;

    arr.push(function () {
        (function (number) {
            return function () {
                console.log(number);
            }
        })(number)
    });

    arr.push(function () {
        console.log(number);
    });

    number = 3;

    return arr;
}

let functions = createFunctions();

functions[0]();
functions[1]();

function createProduct(name, price) {
    name = name || "Sin nombre";
    price = price || 0;

    console.log("Producto: ", name, " Precio: ", price);
}

function createProduct100(name) {
    createProduct(name, 100)
}

function createProductShirt(price) {
    createProduct("Camisa", price);
}

createProduct();
createProduct("Lápiz");
createProduct("Lápiz", 40);

createProduct100();
createProduct100("Lápiz");

createProductShirt();
createProductShirt(75);

function display_menu() {
    "use strict";
    window.console.log("Welcome to the Product Inventory Management System");
    window.console.log("");
    window.console.log("COMMAND MENU");
    window.console.log("view - View all products");
    window.console.log("add - Add a product");
    window.console.log("update - Update a product");
    window.console.log("del - Delete a product");
    window.console.log("exit - Exit the program");
    window.console.log("");
}

function displayProducts(products) {
    let orderedProducts = products.sort((a, b) => (a.sku > b.sku) ? 1 : -1);
    
    for (const product of orderedProducts) {
        displayProduct(product)
    }

    console.log('');
}

function displayProduct(product, message) {    
    console.log(product.sku + ' ' + product.name + ' (' +  product.quantity + ') ' + '$' + product.cost + (message ? message : ''));    
}

function add(products) {
    var newProduct = {};
    
    newProduct.sku = window.prompt("Enter the product's sku");
    newProduct.name = window.prompt("Enter the product's name");
    newProduct.quantity = window.prompt("Enter the product's quantity");
    newProduct.cost = window.prompt("Enter the product's cost");

    products.push(newProduct);
    displayProduct(newProduct, ' was added.');
    console.log('');
}

function del(products) {
    let productSKU = parseInt(window.prompt("Product SKU to delete"));
    
    const hasProduct = products.filter(function(products) {
        return products.sku === productSKU;
    });

    if (!hasProduct) {
        console.log('Invalid product sku.');
        console.log('');
        return;        
    }

    for (const [index, product] of products.entries()) {
        if (product.sku === productSKU) {            
            products.splice(index, 1);
            displayProduct(product, ' was deleted.');
            console.log('');
        }
    }
}

function update(products) {
    let productSKU = parseInt(window.prompt("Product SKU to update"));
    
    const hasProduct = products.filter(function(products) {
        return products.sku === productSKU;
    });
    
    if (!hasProduct) {
        console.log('Invalid product sku.');
        console.log('');
        return;        
    }

    var newProduct = {};
    
    newProduct.sku = window.prompt("Enter the product's sku");
    newProduct.name = window.prompt("Enter the product's name");
    newProduct.quantity = window.prompt("Enter the product's quantity");
    newProduct.cost = window.prompt("Enter the product's cost");

    for (const [index, product] of products.entries()) {
        if (product.sku === productSKU) {            
            products.splice(index, 1, newProduct);
            displayProduct(product, ' was updated.');
            console.log('');
        }
    }
}

function main() {    
    let command;
    let inventory = [];
    
    let products = [
        {
          sku: 9382,
          name: "Hat",
          quantity: 10,
          cost: 2.23          
        }, 
        {
          sku: 3223,
          name: "Socks",
          quantity: 8,
          cost: 4.14
        },
        {
          sku: 4824,
          name: "Shirt",
          quantity: 6,
          cost: 8.99
        },
        {
          sku: 2233,
          name: "Jeans",
          quantity: 2,
          cost: 5.40
        },
        {
          sku: 6343,
          name: "Jacket",
          quantity: 19,
          cost: 122.40
        }
    ]

    display_menu();    
    
    while (true) {
        command = window.prompt("Enter command");
        if (command !== null) {
            if (command === "view") {
                displayProducts(products);
            } else if (command === "add") {
                add(products);
            } else if (command === "delete") {
                del(products);
            } else if (command === "update") {
                update(products);    
            } else if (command === "exit") {
                break;
            } else {
                window.alert("That is not a valid command.");
            }
        } else {
            break;
        }
    }
    window.console.log("Program terminated.");
}

main();
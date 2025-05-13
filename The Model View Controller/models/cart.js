const path = require("path");
const rootDir = require("../util/path");
const fs = require("fs");


const p = path.join(rootDir, "data", "cart.json");

module.exports = class Cart {
    static addProduct(id, productPrice) {
        // Fetch the previous Cart
        fs.readFile(p, (err, fileContent) => {
            let cart = { products: [], totalPrice: 0 };
            if (!err) {
                cart = JSON.parse(fileContent);
            }
            // Analyze the cart => Find the existing Product
            const existingProductIndex = cart.products.findIndex(prod => prod.id === id);
            const existingProduct = cart.products[existingProductIndex];
            let updatedProduct;
            // Add new product/ increase quantity of product
            if (existingProduct) {
                updatedProduct = { ...existingProduct };
                updatedProduct.qty = updatedProduct.qty + 1;
                cart.products = [...cart.products];
                cart.products[existingProduct] = updatedProduct;
            } else {
                updatedProduct = { id: id, qty: 1 };
                cart.products = [...cart.products, updatedProduct];
            }
            cart.totalPrice = cart.totalPrice + +productPrice; // the plus sign converts productPrice to a number
            fs.writeFile(p, JSON.stringify(cart), (err) => {
                console.log(err);
            });
        });        
    }
}
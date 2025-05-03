const path = require("path");
const rootDir = require("../util/path");
const fs = require("fs");

const p = path.join(rootDir, "data", "products.json");
const getProductsFromFile = cb => {
    fs.readFile(p, (err, fileContent) => {
        if (err) {
            return cb([]);
        }
        cb(JSON.parse(fileContent));
    });
}

module.exports = class Product {
    constructor(title) {
        this.title = title;
    }

    save() {
        getProductsFromFile(products => {
            products.push(this); // pushes the object instance to product
            fs.writeFile(p, JSON.stringify(products), (err) => { // JSON.stringify converts js obj/arr to json
                console.log(err);
            });
        }); 
    }

    static fetchAll(cb) { // static keyword calls the method on the class
        getProductsFromFile(cb) 
    }
}
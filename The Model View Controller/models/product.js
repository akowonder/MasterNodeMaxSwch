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
    constructor(title, imageUrl, description, price) {
        this.title = title;
        this.imageUrl = imageUrl;
        this.description = description;
        this.price = price;
    }

    save() {
        this.id = Math.random().toString();
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

    static findById(id, cb) {
        getProductsFromFile(products => {
            const product = products.find(p => p.id === id);
            cb(product);
        })
    }
}
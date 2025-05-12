const fs = require("fs");
const path = require("path");
const rootDir = require("../util/root");

const p = path.join(rootDir, "data", "product.txt");

module.exports = class Product {
    constructor(title, imageUrl, price, description) {
        this.title = title;
        this.iamgeUrl = imageUrl;
        this.price = price;
        this.description = description
    }

    save () {
        //const product
        fs.writeFile(p, this, (err) => {
            if (err) {
                console.log(err);
            }
        })
    }

    // static fetchAll() {

    // }
}
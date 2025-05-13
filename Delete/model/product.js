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
        const product = [];
        fs.readFile(p, "utf-8", (err, fileContent) => {
            if (err) {
                product.push(this);
                fs.writeFile(p, JSON.stringify(product), (err) => {
                    if (err) console.log(err);
                })
            }

            product.push(JSON.parse(fileContent));
            product.push(this);
            fs.writeFile(p, JSON.stringify(product), (err) => {
                console.log(err);
            })
        });
    }

    // static fetchAll() {

    // }
}
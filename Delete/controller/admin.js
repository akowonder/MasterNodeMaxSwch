const Product = require("../model/product")

exports.postAdminProduct = (req, res) => {
    const title = req.body.title;
    const imageUrl = req.body.imageUrl;
    const price = req.body.price;
    const description = req.body.description;
    const product = new Product(title, imageUrl, price, description);
    product.save();
    res.redirect("/");
}

exports.getAdminProduct = (req, res) => {
    res.render("./admin/add-product");
}
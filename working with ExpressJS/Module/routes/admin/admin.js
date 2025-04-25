const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/add-product", (req, res) => {
    res.sendFile(path.join(__dirname,"..","..", "views", "add-product.htm"));
});

router.post("/product", (req, res) => {
    console.log(req.body);
    res.redirect("/") //if url is /product, redirect to /
})

module.exports = router;
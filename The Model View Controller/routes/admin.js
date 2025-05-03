const path = require('path');
const express = require('express');

//const rootDir = require('../util/path');
const productsController = require('../controllers/products');

const router = express.Router();

//const products = []; //application data has been moved to models folder (0)

// // /admin/add-product => GET
// router.get('/add-product', (req, res, next) => {
//   res.render("add-product", {pageTitle: "Add Product", path: "/admin/add-product"});
//   //res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
// }); //application logic has been moved to controllers folder (1)

router.get('/add-product', productsController.getAddProduct); //replaces the b;lock of code above

// /admin/add-product => POST
// router.post('/add-product', (req, res, next) => {
//   products.push({ title: req.body.title });
//   res.redirect('/');
// }); //(1)

router.post('/add-product', productsController.postAddProduct); //replaces the b;lock of code above

module.exports = router;
//exports.products = products; //(0)

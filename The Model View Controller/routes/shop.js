const path = require('path');
const express = require('express');

const productsController = require('../controllers/products');

// const rootDir = require('../util/path');
// const adminData = require('./admin');

const router = express.Router();

// router.get('/', (req, res, next) => {
//   const products = adminData.products;
//   res.render('shop', {prods: products, pageTitle: "Shop", path: "/"}); //you can avoid the file extention, because express 
//   // knows it should you the pug engine, therefore it looks for a pug file 
//   // the second argment to render, passes an object that will be accessible in our view file
// }); // application logic has been moved to controllers folder 

router.get('/', productsController.getProducts);

module.exports = router;

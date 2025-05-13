const express = require("express");
const router = express.Router();
const path = require("path");
const adminProductController = require("../controller/admin")

router.post("/admin/product", adminProductController.postAdminProduct);
router.get("/admin/add-product", adminProductController.getAdminProduct);

module.exports = router;
const express = require("express");
const router = express.Router();
const rootDir = require("../util/path")
const path = require("path")

const nameArr = require(path.join(rootDir, "routes", "homePage"))
router.get("/users", (req, res) => {
    res.render("usersPage", {name: nameArr.names})
})



module.exports = router;
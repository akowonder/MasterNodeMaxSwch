const express = require("express");
const router = express.Router();
const rootDir = require("../util/path")
const path = require("path");

router.get("/users", (req, res) => {
    res.sendFile(path.join(rootDir, "views", "userPage.html"));
});

module.exports =router;
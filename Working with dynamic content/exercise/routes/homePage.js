const express = require("express");
const router = express.Router();
const names = [];

router.get("/", (req, res) => {
    res.render("homePage");
});

router.post("/users", (req, res) => {
    names.push(req.body.name);
    res.redirect("/users");
});


exports.router = router;
exports.names = names;

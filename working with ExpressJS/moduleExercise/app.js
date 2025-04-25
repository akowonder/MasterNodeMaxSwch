const express = require("express");
const app = express();
const homePage = require("./routes/homepage.js");
const userPage = require("./routes/userPage.js");
const path = require("path");

app.use(express.static(path.join(__dirname, "public")));

app.use(homePage);
app.use(userPage);

app.use((req, res, next) => {
    next();
});

app.use((req, res, next) => {
    res.status(404).send("<p>page not found</p>");
});

app.listen(4000);
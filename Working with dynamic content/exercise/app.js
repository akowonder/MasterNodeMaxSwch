const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const homePage = require("./routes/homePage");
const usersPage = require("./routes/usersPage")

app.use(bodyParser.urlencoded({extended: false}));

app.set("view engine", "pug");
app.set("views", "views");

app.use(homePage.router);
app.use(usersPage)

app.listen(5000);
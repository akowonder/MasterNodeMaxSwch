const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const adminRouter = require("./routes/admin")
const shopRoutes = require("./routes/shop")

app.set("view engine", "pug");
app.set("views", "views");

app.use(bodyParser.urlencoded({extended: false}))

app.use(adminRouter);
app.use(shopRoutes);


app.listen(4000, () => console.log("server is listening on port 4000"));
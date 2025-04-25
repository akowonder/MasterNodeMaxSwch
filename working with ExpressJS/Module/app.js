//Exercise
// const http = require("http");
// const express = require("express");
// const app = express();

// app.use((req, res, next) => {
//     console.log("omegth")
//     next();
// })

// app.use((req, res, next) => {
//     console.log("in the jungle the lion sleeps tonight");
//     res.send("<p>hello</p>")
//     //next(); //allows the next middleware function run
// });

// // app.use((req, res, next) => {
// //     console.log("ooooo!");
// //     res.send("<p>hello Habibi</p>"); //function provided by express 
// //     // replaces the need to set header and it send a response
// // })

// //http.createServer(app).listen(3000); //this line can be replaced with a single the single line below
// app.listen(3000)


const express = require("express");
const bodyParser = require("body-parser"); //allows us to read the body of a request
const app = express();
const adminRoute = require("./routes/admin/admin");
const shopRoute = require("./routes/shop")
const path = require("path");

app.use(bodyParser.urlencoded({extended: false})); //call bodyparser this way to parse body
app.use(express.static(path.join(__dirname, "public"))); //allow you make public files accessible to oyur code
//my css files are in the public folder

// app.use("/add-product", (req, res) => {
//     res.send("<form action='/product' method='POST'><input type='text' name='title'><button>Send</button></form>");
// });

// app.use("/product", (req, res) => {
//     console.log(req.body);
//     res.redirect("/") //if url is /product, redirect to /
//})

app.use("/admin", adminRoute); //both blocks of code above have been moved into addminRoute
//the path is concatenated with the path in adminRoute

// app.use("/", (req, res) => {
//     res.send("<p>Hello there</p>");
// });

app.use(shopRoute); //the block of code above has been moved here

app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

app.listen(3000);
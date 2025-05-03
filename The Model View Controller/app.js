const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');

const app = express();

app.set('view engine', 'pug'); //sets the template engine to pug
app.set('views', 'views'); //specifies the location for the template engine
                           //which is views by default

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

// app.use((req, res, next) => {
//     res.status(404).render("404.pug", {pageTitle: "Page not found"});
// });

app.use(errorController.get404); //the above block of code is now handled here

app.listen(3000, () => console.log("server is running on port 3000"));

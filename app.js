const express = require("express");
const exphbs = require('express-handlebars');
const app = express();

app.use(express.static('public'));
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
 
app.get('/', function (req, res) {
    res.render('home');
});

app.get('/rooms', function (req, res) {
    res.render('rooms');
});

app.get('/registration', function (req, res) {
    res.render('registration');
});


app.listen (3000,()=>{
    console.log(`webserver is connected! :D` );

});
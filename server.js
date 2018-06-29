var express = require('express');
var bodyParser = require('body-parser');

var hbs = require('hbs');
var items = require('./routes/items');
var cart = require('./routes/cart');


var app = express();
app.set('view engine', 'html');
app.engine('html', hbs.__express);

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json())
app.use(express.static('public'));


app.use('/items', items);
app.use('/cart', cart);


app.listen(3000, function () {
    console.log('port:3000')
});
var express = require('express');

var router = express.Router();

var data = require('./datbase');

router.get('/', function (req, res) {
    res.render('index', {title: "商品列表", items: data.loadAllItems()});
});



module.exports = router;
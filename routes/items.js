var express = require('express');

var router = express.Router();

var itemList = require('./datbase')


router.get('/',function (req,res) {
    res.render('index',{title:"商品列表",items:itemList.loadAllItems()});
});



module.exports = router;
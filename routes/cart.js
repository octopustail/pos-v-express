var express = require('express');
var router = express.Router();

router.get('/',function (req,res) {
    req.body();
});

router.post('/',function (req,res) {
    console.log('body',res.body())
});

module.exports = router;

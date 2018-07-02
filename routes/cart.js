var express = require('express');
var router = express.Router();
var data = require('./datbase')

var selectedItemInfo = [];
var itemList = data.loadAllItems();

function findBarcodeCount(selectedItemID) {
    var barcodeCount = [];
    for (var i = 0; i < selectedItemID.length; i++) {
        if (selectedItemID.indexOf(selectedItemID[i]) === i) {
            barcodeCount.push({barcode: selectedItemID[i], count: 1})
        } else {
            barcodeCount.find(function (value) {
                return value.barcode === selectedItemID[i]
            }).count++
        }
    }

    return barcodeCount;
}

function findSelectedItemList(itemList, selectedItemID, barcodeCount) {
    var selectedItemList = itemList.filter(function (value) {
        return selectedItemID.indexOf(value.barcode) !== -1
    });

    selectedItemList.forEach(function (v) {
        v.count = barcodeCount.find(function (value) {
            return value.barcode === v.barcode
        }).count;
    });

    return selectedItemList;
}

function addTotalPrice(selectedItemList) {
    var totalPrice = 0;
    selectedItemList.forEach(function (v) {
        var total = v.count * v.price;
        if ((v.type == 'BUY_TWO_GET_ONE_FREE') && v.count > 2) {
            total = total - Math.floor(v.count / 3) * v.price
        }
        v.total = total;
        totalPrice += total;
    });

    return {list: selectedItemList, totalPrice: totalPrice}
}

router.route('/')
    .post(function (req, res) {
        var selectedItemID = req.body.item;

        var barcodeCount = findBarcodeCount(selectedItemID);


        var selectedItemList = findSelectedItemList(itemList, selectedItemID, barcodeCount);

        selectedItemInfo = addTotalPrice(selectedItemList);




    })
    .get(function (req, res) {

        res.render('cart', {title: "商品列表", items: selectedItemInfo});

    });

/* TODO:渲染 把selectedItemList渲染到页面上 */

module.exports = router;

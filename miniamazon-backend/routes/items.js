var express = require('express');
var router = express.Router();

const ItemCtrl = require('../controllers/item-ctrl')

router.post('/item', ItemCtrl.createItem)
router.put('/item/:id', ItemCtrl.updateItem)
router.delete('/item/:id', ItemCtrl.deleteItem)
router.get('/item/:id', ItemCtrl.getItemById)
router.get('/items', ItemCtrl.getItems)
router.get('/items/name/:name', ItemCtrl.getItemsByName)

module.exports = router;

var express = require('express');
var router = express.Router();

const CartCtrl = require('../controllers/cart-ctrl')

router.post('/cart', CartCtrl.createCart)
router.put('/cart/:id', CartCtrl.updateCart)
router.delete('/cart/:id', CartCtrl.deleteCart)
router.get('/cart/:id', CartCtrl.getCartById)
router.get('/carts', CartCtrl.getCarts)

module.exports = router;

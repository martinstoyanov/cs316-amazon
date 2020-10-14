var express = require('express');
var router = express.Router();

const OrderCtrl = require('../controllers/order-ctrl')

router.post('/order', OrderCtrl.createOrder)
router.put('/order/:id', OrderCtrl.updateOrder)
router.delete('/order/:id', OrderCtrl.deleteOrder)
router.get('/order/:id', OrderCtrl.getOrderById)
router.get('/orders', OrderCtrl.getOrders)

module.exports = router;

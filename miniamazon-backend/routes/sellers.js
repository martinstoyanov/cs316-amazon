var express = require('express');
var router = express.Router();

const SellerCtrl = require('../controllers/seller-ctrl')

router.post('/seller', SellerCtrl.createSeller)
router.put('/seller/:id', SellerCtrl.updateSeller)
router.delete('/seller/:id', SellerCtrl.deleteSeller)
router.get('/seller/:id', SellerCtrl.getSellerById)
router.get('/sellers', SellerCtrl.getSellers)

module.exports = router;

var express = require('express');
var router = express.Router();

const CategoryCtrl = require('../controllers/category-ctrl')

router.post('/category', CategoryCtrl.createCategory)
router.put('/category/:id', CategoryCtrl.updateCategory)
router.delete('/category/:id', CategoryCtrl.deleteCategory)
router.get('/category/:id', CategoryCtrl.getCategoryById)
router.get('/categories', CategoryCtrl.getCategories)

module.exports = router;

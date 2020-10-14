var express = require('express');
var router = express.Router();

const ReviewCtrl = require('../controllers/review-ctrl')

router.post('/review', ReviewCtrl.createReview)
router.put('/review/:id', ReviewCtrl.updateReview)
router.delete('/review/:id', ReviewCtrl.deleteReview)
router.get('/review/:id', ReviewCtrl.getReviewById)
router.get('/reviews', ReviewCtrl.getReviews)

module.exports = router;

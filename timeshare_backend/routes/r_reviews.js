const reviewCtrl = require('../controllers/cl_reviews');
const express = require('express');
const router = express.Router();

router.post('/', reviewCtrl.AddNewReview);
router.get('/', reviewCtrl.GetReviewsProperty);

module.exports = router;
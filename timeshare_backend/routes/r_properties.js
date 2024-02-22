const propertyCtrl = require('../controllers/cl_properties');
const express = require('express');
const router = express.Router();

router.get('/all', propertyCtrl.GetAllProperties);
router.get('/', propertyCtrl.GetSingleProperty);

module.exports = router;
const propertyCtrl = require('../controllers/cl_properties');
const express = require('express');
const router = express.Router();

router.get('/all', propertyCtrl.GetAllProperties);
router.get('/locations', propertyCtrl.GetLocations);
router.get('/', propertyCtrl.GetSingleProperty);
router.post('/', propertyCtrl.AddNewProperty);
router.delete('/', propertyCtrl.RemoveProperty);

module.exports = router;
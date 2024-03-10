const customerCtrl = require('../controllers/cl_customer');
const express = require('express');
const router = express.Router();

router.post('/', customerCtrl.addCustomer);

module.exports = router;
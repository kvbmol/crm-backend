const express = require('express');
const router = express.Router();
const { getCustomers, createCustomer, updateCustomer } = require('../controllers/customerController');

router.get('/', getCustomers);
router.post('/', createCustomer);
router.patch('/:id', updateCustomer);

module.exports = router;

const express = require('express');
const router = express.Router();

const brandController = require('../controllers/brandController');
router.get('/get-brand', brandController.getBrand);

module.exports = router;
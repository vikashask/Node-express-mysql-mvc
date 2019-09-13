const express = require('express');
const router = express.Router();

const tagController = require('../controllers/tagController');
router.get('/get-tag', tagController.getTag);
router.post('/add-tag', tagController.addTag);
router.put('/update-tag', tagController.updateTag);

module.exports = router;
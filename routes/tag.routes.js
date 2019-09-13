const express = require('express');
const router = express.Router();

const tagController = require('../controllers/tagController');
router.get('/get-tag', tagController.getTag);
router.post('/add-tag', tagController.addTag);
router.put('/update-tag', tagController.updateTag);
router.delete('/delete-tag/:ids', tagController.deleteTag);

module.exports = router;
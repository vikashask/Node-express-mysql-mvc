const express = require('express');
const router = express.Router();

const categoryController = require('../controllers/categoryController');
router.get('/get-category/:id?', categoryController.getCategory);
router.post('/add-category', categoryController.addCategory);
router.put('/update-category', categoryController.updateCategory);
router.delete('/delete-category/:ids', categoryController.deleteCategory);

module.exports = router;
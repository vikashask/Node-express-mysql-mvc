const express = require('express');
const router = express.Router();
const commonMiddleware = require('../middleware/common.middleware');

const categoryController = require('../controllers/categoryController');
router.get('/get-category/:brand_id?',commonMiddleware.getBrandIdValidator, categoryController.getCategory);
router.post('/add-category',commonMiddleware.postBrandIdValidator, categoryController.addCategory);
router.put('/update-category', categoryController.updateCategory);
router.delete('/delete-category/:ids', categoryController.deleteCategory);

module.exports = router;
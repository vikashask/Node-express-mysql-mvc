const express = require('express');
const router = express.Router();
const commonMiddleware = require('../middleware/common.middleware');

const tagController = require('../controllers/tagController');
router.get('/get-tag/:brand_id?', commonMiddleware.getBrandIdValidator, tagController.getTag);
router.post('/add-tag', commonMiddleware.postBrandIdValidator,tagController.addTag);
router.put('/update-tag', tagController.updateTag);
router.delete('/delete-tag/:ids', tagController.deleteTag);
router.put('/update-tag-status/:ids', tagController.updateTagStatus);

module.exports = router;
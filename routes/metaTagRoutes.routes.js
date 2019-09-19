const express = require('express');
const router = express.Router();
const commonMiddleware = require('../middleware/common.middleware');

const metaTagController = require('../controllers/metaTagController');
router.get('/get-meta-tag/:brand_id?',commonMiddleware.getBrandIdValidator, metaTagController.getMetaTag);
router.post('/add-meta-tag',commonMiddleware.postBrandIdValidator, metaTagController.addMetaTag);
router.delete('/delete-meta-tag/:ids', metaTagController.deleteMetaTag);

module.exports = router;
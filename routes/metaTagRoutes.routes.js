const express = require('express');
const router = express.Router();

const metaTagController = require('../controllers/metaTagController');
router.get('/get-meta-tag', metaTagController.getMetaTag);
router.post('/add-meta-tag', metaTagController.addMetaTag);
router.delete('/delete-meta-tag/:ids', metaTagController.deleteMetaTag);

module.exports = router;
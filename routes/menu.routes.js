const express = require('express');
const router = express.Router();
const commonMiddleware = require('../middleware/common.middleware');

const menuController = require('../controllers/menuController');
router.get('/get-menu/:brand_id?',commonMiddleware.getBrandIdValidator, menuController.getMenu);
router.post('/add-menu',commonMiddleware.postBrandIdValidator, menuController.addMenu);
router.put('/update-menu', menuController.updateMenu);
router.delete('/delete-menu/:ids', menuController.deleteMenu);

module.exports = router;
const express = require('express');
const router = express.Router();

const menuController = require('../controllers/menuController');
router.get('/get-menu', menuController.getMenu);
router.post('/add-menu', menuController.addMenu);
router.put('/update-menu', menuController.updateMenu);
router.delete('/delete-menu/:ids', menuController.deleteMenu);

module.exports = router;
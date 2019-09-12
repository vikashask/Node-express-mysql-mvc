const express = require('express');
const router = express.Router();

const profileController = require('../../controllers/profileController');
router.get('/get-profile', profileController.getProfile);
router.post('/update-profile', profileController.updateProfile);
router.post('/logout', profileController.logout);

module.exports = router;
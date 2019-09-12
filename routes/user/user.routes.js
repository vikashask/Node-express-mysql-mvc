const express = require('express');
const router = express.Router();

const userController = require('../../controllers/userController');
router.get('/', userController.getUsers);
router.post('/login', userController.login);
router.post('/register', userController.register);
router.post('/forgot-password', userController.forgotPassword);
router.post('/logout', userController.register);

module.exports = router;
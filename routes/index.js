const express = require('express');
const router = express.Router();

const userRoutes = require('./user/user.routes');
const profileRoutes = require('./user/profile.routes');

router.use('/user', userRoutes);
router.use('/profile', profileRoutes);
module.exports = router;

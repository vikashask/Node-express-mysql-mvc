const express = require('express');
const router = express.Router();

const userRoutes = require('./user/user.routes');
const profileRoutes = require('./user/profile.routes');
const brandRoutes = require('./brand.routes');

router.use('/user', userRoutes);
router.use('/profile', profileRoutes);
router.use('/brand', brandRoutes);
module.exports = router;

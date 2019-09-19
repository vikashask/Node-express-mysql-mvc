const express = require('express');
const router = express.Router();

const userRoutes = require('./user/user.routes');
const profileRoutes = require('./user/profile.routes');
const brandRoutes = require('./brand.routes');
const tagRoutes = require('./tag.routes');
const metaTagRoutes = require('./metaTagRoutes.routes');
const menuRoutes = require('./menu.routes');
const categoriesRoutes = require('./categories.routes');
const ingredientsRoutes = require('./ingredients.routes');

router.use('/user', userRoutes);
router.use('/profile', profileRoutes);
router.use('/brand', brandRoutes);
router.use('/tag', tagRoutes);
router.use('/meta-tag', metaTagRoutes);
router.use('/menu', menuRoutes);
router.use('/category', categoriesRoutes);
router.use('/ingredients', ingredientsRoutes);
module.exports = router;

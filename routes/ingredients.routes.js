const express = require('express');
const router = express.Router();
const commonMiddleware = require('../middleware/common.middleware');

const ingredientsController = require('../controllers/ingredientsController');
router.get('/get-ingredients/:brand_id?',commonMiddleware.getBrandIdValidator ,ingredientsController.getIngredients);
router.post('/add-ingredients',commonMiddleware.postBrandIdValidator, ingredientsController.addIngredients);
router.put('/update-ingredients', ingredientsController.updateIngredients);
router.delete('/delete-ingredients/:ids', ingredientsController.deleteIngredients);
router.put('/update-ingredients-status/:ids', ingredientsController.updateIngredientsStatus);

module.exports = router;
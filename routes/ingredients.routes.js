const express = require('express');
const router = express.Router();

const ingredientsController = require('../controllers/ingredientsController');
router.get('/get-ingredients', ingredientsController.getIngredients);
router.post('/add-ingredients', ingredientsController.addIngredients);
router.put('/update-ingredients', ingredientsController.updateIngredients);
router.delete('/delete-ingredients/:ids', ingredientsController.deleteIngredients);
router.put('/update-ingredients-status/:ids', ingredientsController.updateIngredientsStatus);

module.exports = router;
import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { FoodController } from './food.controller';
import { FoodValidation } from './food.validation';

const router = express.Router();

router.get('/', FoodController.getAllFoods);

router.get('/get-starters', FoodController.getStarters);
router.get('/get-mains', FoodController.getMains);
router.get('/get-desserts', FoodController.getDesserts);
router.get('/get-mocktails', FoodController.getMocktails);

router.get('/:id', FoodController.getSingleFood);

router.post(
  '/create-food',
  validateRequest(FoodValidation.createFoodZodSchema),
  FoodController.createFood
);
router.patch(
  '/:id',
  validateRequest(FoodValidation.updateFoodZodSchema),
  FoodController.updateFood
);

router.delete('/:id', FoodController.deleteFood);

export const FoodRoutes = router;

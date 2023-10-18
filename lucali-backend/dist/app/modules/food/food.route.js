"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FoodRoutes = void 0;
const express_1 = __importDefault(require("express"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const food_controller_1 = require("./food.controller");
const food_validation_1 = require("./food.validation");
const router = express_1.default.Router();
router.get('/', food_controller_1.FoodController.getAllFoods);
router.get('/get-starters', food_controller_1.FoodController.getStarters);
router.get('/get-mains', food_controller_1.FoodController.getMains);
router.get('/get-desserts', food_controller_1.FoodController.getDesserts);
router.get('/get-mocktails', food_controller_1.FoodController.getMocktails);
router.get('/:id', food_controller_1.FoodController.getSingleFood);
router.post('/create-food', (0, validateRequest_1.default)(food_validation_1.FoodValidation.createFoodZodSchema), food_controller_1.FoodController.createFood);
router.patch('/:id', (0, validateRequest_1.default)(food_validation_1.FoodValidation.updateFoodZodSchema), food_controller_1.FoodController.updateFood);
router.delete('/:id', food_controller_1.FoodController.deleteFood);
exports.FoodRoutes = router;
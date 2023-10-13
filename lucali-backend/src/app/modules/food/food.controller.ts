import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import httpStatus from 'http-status';
import { FoodService } from './food.services';

const createFood = catchAsync(async (req: Request, res: Response) => {
  const result = await FoodService.createFood(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Food created successfully',
    data: result,
  });
});

const getAllFoods = catchAsync(async (req: Request, res: Response) => {
  const result = await FoodService.getAllFoods();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Foods fetched successfully',
    meta: result.meta,
    data: result.data,
  });
});

const getSingleFood = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await FoodService.getSingleFood(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Food fetched successfully',
    data: result,
  });
});
const getStarters = catchAsync(async (req: Request, res: Response) => {
  const result = await FoodService.getStarters();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Starters fetched successfully',
    data: result,
  });
});
const getMains = catchAsync(async (req: Request, res: Response) => {
  const result = await FoodService.getMains();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Main courses fetched successfully',
    data: result,
  });
});
const getDesserts = catchAsync(async (req: Request, res: Response) => {
  const result = await FoodService.getDesserts();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Desserts fetched successfully',
    data: result,
  });
});
const getMocktails = catchAsync(async (req: Request, res: Response) => {
  const result = await FoodService.getMocktails();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Mocktails fetched successfully',
    data: result,
  });
});

const updateFood = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await FoodService.updateFood(id, req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Food updated successfully',
    data: result,
  });
});

const deleteFood = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await FoodService.deleteFood(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Food deleted successfully',
    data: result,
  });
});

export const FoodController = {
  createFood,
  getAllFoods,
  getSingleFood,
  getStarters,
  getMains,
  getDesserts,
  getMocktails,
  updateFood,
  deleteFood,
};

import prisma from '../../../shared/prisma';
import { IGenericResponse } from '../../../interfaces/common';
import { Food, FoodType } from '@prisma/client';

const createFood = async (data: Food): Promise<Food> => {
  const result = await prisma.food.create({
    data,
  });
  return result;
};

const getAllFoods = async (): Promise<IGenericResponse<Food[]>> => {
  const result = await prisma.food.findMany({});

  return {
    meta: {
      total: 10,
      page: 1,
      limit: 1,
    },
    data: result,
  };
};

const getSingleFood = async (id: string): Promise<Food | null> => {
  const result = await prisma.food.findUnique({
    where: {
      id,
    },
  });
  return result;
};

const getStarters = async (): Promise<IGenericResponse<Food[]>> => {
  const result = await prisma.food.findMany({
    where: {
      type: FoodType.STARTERS,
    },
  });

  return {
    meta: {
      total: 10,
      page: 1,
      limit: 1,
    },
    data: result,
  };
};
const getMains = async (): Promise<IGenericResponse<Food[]>> => {
  const result = await prisma.food.findMany({
    where: {
      type: FoodType.MAINCOURSE,
    },
  });

  return {
    meta: {
      total: 10,
      page: 1,
      limit: 1,
    },
    data: result,
  };
};
const getDesserts = async (): Promise<IGenericResponse<Food[]>> => {
  const result = await prisma.food.findMany({
    where: {
      type: FoodType.DESSERTS,
    },
  });

  return {
    meta: {
      total: 10,
      page: 1,
      limit: 1,
    },
    data: result,
  };
};
const getMocktails = async (): Promise<IGenericResponse<Food[]>> => {
  const result = await prisma.food.findMany({
    where: {
      type: FoodType.MOCKTAILS,
    },
  });

  return {
    meta: {
      total: 10,
      page: 1,
      limit: 1,
    },
    data: result,
  };
};

const updateFood = async (
  id: string,
  payload: Partial<Food>
): Promise<Food> => {
  const result = await prisma.food.update({
    where: {
      id,
    },
    data: payload,
    include: {
      reviews: true,
    },
  });
  return result;
};

const deleteFood = async (id: string): Promise<Food> => {
  const result = await prisma.food.delete({
    where: {
      id,
    },
    include: {
      reviews: true,
    },
  });
  return result;
};

export const FoodService = {
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

import prisma from '../../../shared/prisma';
import { IGenericResponse } from '../../../interfaces/common';
import { Review } from '@prisma/client';

const createReview = async (data: Review): Promise<Review> => {
  const result = await prisma.review.create({
    data,
    include: {
      food: true,
    },
  });
  return result;
};

const getAllReviews = async (): Promise<IGenericResponse<Review[]>> => {
  const result = await prisma.review.findMany({
    include: {
      food: true,
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

const getReviews = async (id: string): Promise<Review[] | null> => {
  const result = await prisma.review.findMany({
    where: {
      foodId: id,
    },
  });
  return result;
};

const updateReview = async (
  id: string,
  payload: Partial<Review>
): Promise<Review> => {
  const result = await prisma.review.update({
    where: {
      id,
    },
    data: payload,
    include: {
      food: true,
    },
  });
  return result;
};

const deleteReview = async (id: string): Promise<Review> => {
  const result = await prisma.review.delete({
    where: {
      id,
    },
    include: {
      food: true,
    },
  });
  return result;
};

export const ReviewService = {
  createReview,
  getAllReviews,
  getReviews,
  updateReview,
  deleteReview,
};

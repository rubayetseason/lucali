import { z } from 'zod';
// request validation by zod
const createReviewZodSchema = z.object({
  body: z.object({
    reviewDescription: z.string({
      required_error: 'Description is required',
    }),
    foodId: z.string({
      required_error: 'FoodId is required',
    }),
    userName: z.string({
      required_error: 'UserName is required',
    }),
  }),
});

const updateReviewZodSchema = z.object({
  body: z.object({
    reviewDescription: z.string({
      required_error: 'Description is required',
    }),
  }),
});

export const ReviewValidation = {
  createReviewZodSchema,
  updateReviewZodSchema,
};

import { z } from 'zod';
import { FoodTypes } from './food.constants';

const createFoodZodSchema = z.object({
  body: z.object({
    name: z.string({
      required_error: 'Name is required',
    }),
    price: z.number({
      required_error: 'Price is required',
    }),
    type: z.enum([...FoodTypes] as [string, ...string[]], {
      required_error: 'Food type is required',
    }),
    description: z.string({
      required_error: 'Description is required',
    }),
    img: z.string({
      required_error: 'Img is required',
    }),
    detail: z.string({
      required_error: 'Detail is required',
    }),
    isPopular: z.boolean({
      required_error: 'isPopular is required',
    }),
  }),
});

const updateFoodZodSchema = z.object({
  body: z.object({
    name: z
      .string({
        required_error: 'Name is required',
      })
      .optional(),
    price: z
      .number({
        required_error: 'Price is required',
      })
      .optional(),
    type: z
      .enum([...FoodTypes] as [string, ...string[]], {
        required_error: 'Food type is required',
      })
      .optional(),
    description: z
      .string({
        required_error: 'Description is required',
      })
      .optional(),
    isPopular: z
      .boolean({
        required_error: 'isPopular is required',
      })
      .optional(),
  }),
});
export const FoodValidation = {
  createFoodZodSchema,
  updateFoodZodSchema,
};

import { z } from 'zod';
// request validation by zod
const createUserZodSchema = z.object({
  body: z.object({
    name: z.string({
      required_error: 'Name is required',
    }),
    number: z.string({
      required_error: 'Number is required',
    }),
    password: z.string({
      required_error: 'Password is required',
    }),
    role: z.string({
      required_error: 'Role is required',
    }),
  }),
});

const updateUserZodSchema = z.object({
  body: z.object({
    name: z
      .string({
        required_error: 'Name is required',
      })
      .optional(),
    number: z
      .string({
        required_error: 'Number is required',
      })
      .optional(),
    password: z
      .string({
        required_error: 'Password is required',
      })
      .optional(),
    role: z
      .string({
        required_error: 'Role is required',
      })
      .optional(),
  }),
});

export const UserValidation = {
  createUserZodSchema,
  updateUserZodSchema,
};

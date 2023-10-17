import { z } from 'zod';

const createReservationZodSchema = z.object({
  body: z.object({
    personName: z.string({
      required_error: 'Name is required',
    }),
    personNumber: z.string({
      required_error: 'Number is required',
    }),
    time: z.string({
      required_error: 'Time is required',
    }),
    date: z.string({
      required_error: 'Date is required',
    }),
    people: z.string({
      required_error: 'People is required',
    }),
  }),
});

const updateReservationZodSchema = z.object({
  body: z.object({
    personName: z
      .string({
        required_error: 'Name is required',
      })
      .optional(),
    personNumber: z
      .string({
        required_error: 'Number is required',
      })
      .optional(),
    time: z
      .string({
        required_error: 'Time is required',
      })
      .optional(),
    date: z
      .string({
        required_error: 'Date is required',
      })
      .optional(),
  }),
});
export const ReservationValidation = {
  createReservationZodSchema,
  updateReservationZodSchema,
};

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReservationValidation = void 0;
const zod_1 = require("zod");
const createReservationZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        personName: zod_1.z.string({
            required_error: 'Name is required',
        }),
        personNumber: zod_1.z.string({
            required_error: 'Number is required',
        }),
        time: zod_1.z.string({
            required_error: 'Time is required',
        }),
        date: zod_1.z.string({
            required_error: 'Date is required',
        }),
        people: zod_1.z.string({
            required_error: 'People is required',
        }),
    }),
});
const updateReservationZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        personName: zod_1.z
            .string({
            required_error: 'Name is required',
        })
            .optional(),
        personNumber: zod_1.z
            .string({
            required_error: 'Number is required',
        })
            .optional(),
        time: zod_1.z
            .string({
            required_error: 'Time is required',
        })
            .optional(),
        date: zod_1.z
            .string({
            required_error: 'Date is required',
        })
            .optional(),
    }),
});
exports.ReservationValidation = {
    createReservationZodSchema,
    updateReservationZodSchema,
};

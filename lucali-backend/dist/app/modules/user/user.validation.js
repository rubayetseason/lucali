"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserValidation = void 0;
const zod_1 = require("zod");
// request validation by zod
const createUserZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string({
            required_error: 'Name is required',
        }),
        number: zod_1.z.string({
            required_error: 'Number is required',
        }),
        password: zod_1.z.string({
            required_error: 'Password is required',
        }),
        role: zod_1.z.string({
            required_error: 'Role is required',
        }),
    }),
});
const updateUserZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z
            .string({
            required_error: 'Name is required',
        })
            .optional(),
        number: zod_1.z
            .string({
            required_error: 'Number is required',
        })
            .optional(),
        password: zod_1.z
            .string({
            required_error: 'Password is required',
        })
            .optional(),
        role: zod_1.z
            .string({
            required_error: 'Role is required',
        })
            .optional(),
    }),
});
exports.UserValidation = {
    createUserZodSchema,
    updateUserZodSchema,
};

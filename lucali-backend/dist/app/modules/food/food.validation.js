"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FoodValidation = void 0;
const zod_1 = require("zod");
const food_constants_1 = require("./food.constants");
const createFoodZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string({
            required_error: 'Name is required',
        }),
        price: zod_1.z.number({
            required_error: 'Price is required',
        }),
        type: zod_1.z.enum([...food_constants_1.FoodTypes], {
            required_error: 'Food type is required',
        }),
        description: zod_1.z.string({
            required_error: 'Description is required',
        }),
        img: zod_1.z.string({
            required_error: 'Img is required',
        }),
        detail: zod_1.z.string({
            required_error: 'Detail is required',
        }),
        isPopular: zod_1.z.boolean({
            required_error: 'isPopular is required',
        }),
    }),
});
const updateFoodZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z
            .string({
            required_error: 'Name is required',
        })
            .optional(),
        price: zod_1.z
            .number({
            required_error: 'Price is required',
        })
            .optional(),
        type: zod_1.z
            .enum([...food_constants_1.FoodTypes], {
            required_error: 'Food type is required',
        })
            .optional(),
        description: zod_1.z
            .string({
            required_error: 'Description is required',
        })
            .optional(),
        isPopular: zod_1.z
            .boolean({
            required_error: 'isPopular is required',
        })
            .optional(),
    }),
});
exports.FoodValidation = {
    createFoodZodSchema,
    updateFoodZodSchema,
};

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewValidation = void 0;
const zod_1 = require("zod");
// request validation by zod
const createReviewZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        reviewDescription: zod_1.z.string({
            required_error: 'Description is required',
        }),
        foodId: zod_1.z.string({
            required_error: 'FoodId is required',
        }),
        reviewer: zod_1.z.string({
            required_error: 'Reviewer is required',
        }),
    }),
});
const updateReviewZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        reviewDescription: zod_1.z.string({
            required_error: 'Description is required',
        }),
    }),
});
exports.ReviewValidation = {
    createReviewZodSchema,
    updateReviewZodSchema,
};

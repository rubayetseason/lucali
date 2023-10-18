"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FoodService = void 0;
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const client_1 = require("@prisma/client");
const createFood = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.food.create({
        data,
    });
    return result;
});
const getAllFoods = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.food.findMany({});
    return {
        meta: {
            total: 10,
            page: 1,
            limit: 1,
        },
        data: result,
    };
});
const getSingleFood = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.food.findUnique({
        where: {
            id,
        },
    });
    return result;
});
const getStarters = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.food.findMany({
        where: {
            type: client_1.FoodType.STARTERS,
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
});
const getMains = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.food.findMany({
        where: {
            type: client_1.FoodType.MAINCOURSE,
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
});
const getDesserts = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.food.findMany({
        where: {
            type: client_1.FoodType.DESSERTS,
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
});
const getMocktails = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.food.findMany({
        where: {
            type: client_1.FoodType.MOCKTAILS,
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
});
const updateFood = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.food.update({
        where: {
            id,
        },
        data: payload,
        include: {
            reviews: true,
        },
    });
    return result;
});
const deleteFood = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.food.delete({
        where: {
            id,
        },
        include: {
            reviews: true,
        },
    });
    return result;
});
exports.FoodService = {
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

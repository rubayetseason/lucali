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
exports.ReservationService = void 0;
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const createReservation = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.reservation.create({
        data,
    });
    return result;
});
const getAllReservations = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.reservation.findMany({});
    return {
        meta: {
            total: 10,
            page: 1,
            limit: 1,
        },
        data: result,
    };
});
const getSingleReservation = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.reservation.findUnique({
        where: {
            id,
        },
    });
    return result;
});
const updateReservation = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.reservation.update({
        where: {
            id,
        },
        data: payload,
    });
    return result;
});
const deleteReservation = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.reservation.delete({
        where: {
            id,
        },
    });
    return result;
});
exports.ReservationService = {
    createReservation,
    getAllReservations,
    getSingleReservation,
    updateReservation,
    deleteReservation,
};

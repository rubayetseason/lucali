"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReservationRoutes = void 0;
const express_1 = __importDefault(require("express"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const reservation_validation_1 = require("./reservation.validation");
const reservation_controller_1 = require("./reservation.controller");
const router = express_1.default.Router();
router.get('/', reservation_controller_1.ReservationController.getAllReservations);
router.get('/:id', reservation_controller_1.ReservationController.getSingleReservation);
router.post('/create-reservation', (0, validateRequest_1.default)(reservation_validation_1.ReservationValidation.createReservationZodSchema), reservation_controller_1.ReservationController.createReservation);
router.patch('/:id', (0, validateRequest_1.default)(reservation_validation_1.ReservationValidation.updateReservationZodSchema), reservation_controller_1.ReservationController.updateReservation);
router.delete('/:id', reservation_controller_1.ReservationController.deleteReservation);
exports.ReservationRoutes = router;

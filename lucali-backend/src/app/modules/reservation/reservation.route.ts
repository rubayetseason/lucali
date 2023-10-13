import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { ReservationValidation } from './reservation.validation';
import { ReservationController } from './reservation.controller';

const router = express.Router();

router.get('/', ReservationController.getAllReservations);

router.get('/:id', ReservationController.getSingleReservation);

router.post(
  '/create-reservation',
  validateRequest(ReservationValidation.createReservationZodSchema),
  ReservationController.createReservation
);
router.patch(
  '/:id',
  validateRequest(ReservationValidation.updateReservationZodSchema),
  ReservationController.updateReservation
);

router.delete('/:id', ReservationController.deleteReservation);

export const ReservationRoutes = router;

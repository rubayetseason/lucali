import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { ReservationValidation } from './reservation.validation';

const router = express.Router();

// router.get('/', ReservationController.getAllReservations);

// router.get('/:id', ReservationController.getSingleReservation);

router.post(
  '/create-user',
  validateRequest(ReservationValidation.createReservationZodSchema)
  //   ReservationController.createReservation
);
router.patch(
  '/:id',
  validateRequest(ReservationValidation.updateReservationZodSchema)
  //   ReservationController.updateReservation
);

// router.delete('/:id', ReservationController.deleteReservation);

export const ReservationRoutes = router;

import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import httpStatus from 'http-status';
import { ReservationService } from './reservation.services';

const createReservation = catchAsync(async (req: Request, res: Response) => {
  const result = await ReservationService.createReservation(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Reservation created successfully',
    data: result,
  });
});

const getAllReservations = catchAsync(async (req: Request, res: Response) => {
  const result = await ReservationService.getAllReservations();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Reservations fetched successfully',
    meta: result.meta,
    data: result.data,
  });
});

const getSingleReservation = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await ReservationService.getSingleReservation(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Reservation fetched successfully',
    data: result,
  });
});

const updateReservation = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await ReservationService.updateReservation(id, req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Reservation updated successfully',
    data: result,
  });
});

const deleteReservation = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await ReservationService.deleteReservation(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Reservation deleted successfully',
    data: result,
  });
});

export const ReservationController = {
  createReservation,
  getAllReservations,
  getSingleReservation,
  updateReservation,
  deleteReservation,
};

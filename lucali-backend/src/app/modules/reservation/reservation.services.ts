import { Reservation } from '@prisma/client';
import prisma from '../../../shared/prisma';
import { IGenericResponse } from '../../../interfaces/common';

const createReservation = async (data: Reservation): Promise<Reservation> => {
  const result = await prisma.reservation.create({
    data,
  });
  return result;
};

const getAllReservations = async (): Promise<
  IGenericResponse<Reservation[]>
> => {
  const result = await prisma.reservation.findMany({});

  return {
    meta: {
      total: 10,
      page: 1,
      limit: 1,
    },
    data: result,
  };
};

const getSingleReservation = async (
  id: string
): Promise<Reservation | null> => {
  const result = await prisma.reservation.findUnique({
    where: {
      id,
    },
  });
  return result;
};

const updateReservation = async (
  id: string,
  payload: Partial<Reservation>
): Promise<Reservation> => {
  const result = await prisma.reservation.update({
    where: {
      id,
    },
    data: payload,
  });
  return result;
};

const deleteReservation = async (id: string): Promise<Reservation> => {
  const result = await prisma.reservation.delete({
    where: {
      id,
    },
  });
  return result;
};

export const ReservationService = {
  createReservation,
  getAllReservations,
  getSingleReservation,
  updateReservation,
  deleteReservation,
};

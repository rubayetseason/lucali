import { tagTypes } from "../TagTypes";
import { baseApi } from "./baseApi";

const RESERVATION_URL = "/reservation";

export const reservationApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    reservationCreate: build.mutation({
      query: (reservationData) => ({
        url: `${RESERVATION_URL}/create-reservation`,
        method: "POST",
        data: reservationData,
      }),
      //for caching data --> name same with tagtypes
      invalidatesTags: [tagTypes.reservation],
    }),
  }),
});

export const { useReservationCreateMutation } = reservationApi;

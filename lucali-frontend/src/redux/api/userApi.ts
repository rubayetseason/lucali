import { tagTypes } from "../TagTypes";
import { baseApi } from "./baseApi";
const USER_URL = "/user";

export const userApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    userCreate: build.mutation({
      query: (userData) => ({
        url: `${USER_URL}/create-user`,
        method: "POST",
        data: userData,
      }),
      //for caching data --> name same with tagtypes
      invalidatesTags: [tagTypes.user],
    }),
  }),
});

export const { useUserCreateMutation } = userApi;

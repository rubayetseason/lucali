import { IMeta } from "@/types";
import { tagTypes } from "../TagTypes";
import { baseApi } from "./baseApi";

const FOOD_URL = "/food";

export const foodApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    starters: build.query({
      query: (arg: Record<string, any>) => {
        return {
          url: `${FOOD_URL}/get-starters`,
          method: "GET",
          params: arg,
        };
      },
      transformResponse: (response: any, meta: IMeta) => {
        return {
          food: response,
        };
      },
      providesTags: [tagTypes.food],
    }),
    mains: build.query({
      query: (arg: Record<string, any>) => {
        return {
          url: `${FOOD_URL}/get-mains`,
          method: "GET",
          params: arg,
        };
      },
      transformResponse: (response: any, meta: IMeta) => {
        return {
          food: response,
        };
      },
      providesTags: [tagTypes.food],
    }),
    desserts: build.query({
      query: (arg: Record<string, any>) => {
        return {
          url: `${FOOD_URL}/get-desserts`,
          method: "GET",
          params: arg,
        };
      },
      transformResponse: (response: any, meta: IMeta) => {
        return {
          food: response,
        };
      },
      providesTags: [tagTypes.food],
    }),
    mocktails: build.query({
      query: (arg: Record<string, any>) => {
        return {
          url: `${FOOD_URL}/get-mocktails`,
          method: "GET",
          params: arg,
        };
      },
      transformResponse: (response: any, meta: IMeta) => {
        return {
          food: response,
        };
      },
      providesTags: [tagTypes.food],
    }),
  }),
});

export const {
  useStartersQuery,
  useMainsQuery,
  useDessertsQuery,
  useMocktailsQuery,
} = foodApi;

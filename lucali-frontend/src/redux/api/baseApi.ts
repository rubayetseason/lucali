import { createApi } from "@reduxjs/toolkit/query/react";

import { getBaseUrl } from "@/helpers/envConfig";
import { axiosBaseQuery } from "@/helpers/axiosBaseQuery";
import { tagTypesList } from "../TagTypes";

// Define a service using a base URL and expected endpoints
export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: axiosBaseQuery({ baseUrl: getBaseUrl() }),
  endpoints: () => ({}),
  //for caching data use tagtypes
  tagTypes: tagTypesList,
});

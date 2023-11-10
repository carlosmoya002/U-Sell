const ITEMS_URL = "/api/items";
import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({ baseUrl: "" });

export const apiSlice = createApi({
  baseQuery,
  tagTypes: ["Item"],
  endpoints: (builder) => ({}),
});

export const itemApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createItem: builder.mutation({
      query: (data) => ({
        url: `${ITEMS_URL}/addItem`,
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useCreateItemMutation } = itemApiSlice;

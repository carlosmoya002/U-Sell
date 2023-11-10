const USERS_URL = '/api/events';
import { fetchBaseQuery, createApi } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({ baseUrl: '' });

export const apiSlice = createApi({
  baseQuery,
  tagTypes: ['Event'],
  endpoints: (builder) => ({}),
});

export const eventApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createEvent: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/addEvent`,
        method: 'POST',
        body: data,
      }),
    }),
  }),
});

export const {
  useCreateEventMutation,
} = eventApiSlice;

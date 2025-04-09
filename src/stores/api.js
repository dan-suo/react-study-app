import { createApi } from '@reduxjs/toolkit/query/react';
import { axiosInstance } from '../api/axios';

// Кастомный baseQuery с Axios
const axiosBaseQuery = async ({ url, method, data, params }) => {
  try {
    const result = await axiosInstance({ url, method, data, params });
    return { data: result.data };
  } catch (error) {
    return { error: { status: error.response?.status, data: error.response?.data } };
  }
};

export const api = createApi({
  baseQuery: axiosBaseQuery, // Используем Axios вместо fetchBaseQuery
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => ({ url: 'posts', method: 'GET' }), // Теперь явно указываем метод
    }),
    getPostById: builder.query({
      query: (id) => ({ url: `posts/${id}`, method: 'GET' }),
    }),
  }),
});

export const { useGetPostsQuery, useGetPostByIdQuery } = api;
import { api } from './api';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
    reducer: {
      [api.reducerPath]: api.reducer, // Автоматически подключает редьюсер RTK Query
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(api.middleware), // Добавляем middleware для API
  });
'use client';

import { configureStore } from '@reduxjs/toolkit';
import mainSlice from './slices/mainSlice';
import browsSlice from './slices/browsSlice';

const store = configureStore({
  reducer: {
    main:mainSlice,
    brows:browsSlice
  },
});

export default store

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch 
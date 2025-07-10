import { configureStore } from '@reduxjs/toolkit';
import selectedSubItemReducer from './slices/selectedSubItemSlice';

export const store = configureStore({
  reducer: {
    selectedSubItem: selectedSubItemReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

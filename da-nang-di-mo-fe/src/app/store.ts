import { configureStore } from '@reduxjs/toolkit';
import selectedSubItemReducer from './slices/selectedSubItemSlice';
import languageReducer from './slices/languageSlice';

export const store = configureStore({
  reducer: {
    selectedSubItem: selectedSubItemReducer,
    language: languageReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

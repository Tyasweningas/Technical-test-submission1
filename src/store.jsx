import { configureStore } from '@reduxjs/toolkit';
import formReducer from './slices/formSlices'

export const store = configureStore({
  reducer: {
    form: formReducer,
  },
});

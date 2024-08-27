import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  formData: {},
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    saveFormData: (state, action) => {
      state.formData = action.payload;
    },
  },
});

export const { saveFormData } = formSlice.actions;

export default formSlice.reducer;
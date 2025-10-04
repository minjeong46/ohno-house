import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  message: '',
  isVisible: false,
  type: 'info', // info, success, error 등
};

const toastSlice = createSlice({
  name: 'toast',
  initialState,
  reducers: {
    showToast: (state, action) => {
      state.message = action.payload.message;
      state.type = action.payload.type || 'info';
      state.isVisible = true;
    },
    hideToast: (state) => {
      state.isVisible = false;
      state.message = '';
    },
  },
});

export const { showToast, hideToast } = toastSlice.actions;
export default toastSlice.reducer;

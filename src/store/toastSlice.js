import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  message: '',
  isVisible: false,
  type: 'info',
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
    },
    clearToastMessage: (state) => {
      state.message = '';
      state.type = 'info';
    },
  },
});

export const { showToast, hideToast, clearToastMessage } = toastSlice.actions;
export default toastSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  allUsers: [],
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    registerUser: (state, action) => {
      state.allUsers.push({ ...action.payload, cart: [] });
    },
    saveUserCart: (state, action) => {
      const { userId, cartItems } = action.payload;
      const userIndex = state.allUsers.findIndex((user) => user.id === userId);
      if (userIndex !== -1) {
        state.allUsers[userIndex].cart = cartItems;
      }
    },
  },
});

export const { registerUser, saveUserCart } = usersSlice.actions;
export default usersSlice.reducer;

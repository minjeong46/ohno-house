import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  allUsers: [],
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    registerUser: (state, action) => {
      state.allUsers.push(action.payload);
    },
  },
});

export const { registerUser } = usersSlice.actions;
export default usersSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: false,
  userData: null,
  cart: [],
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = true;
      state.userData = action.payload;
      state.cart = action.payload.cart || [];
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.userData = null;
      state.cart = [];
    },
    addToCart: (state, action) => {
      if (!Array.isArray(state.cart)) {
        state.cart = [];
      }

      const { product, quantity } = action.payload.item;
      const existingItemIndex = state.cart.findIndex(
        (item) => item.product.id === product.id
      );

      if (existingItemIndex >= 0) {
        state.cart[existingItemIndex].quantity += quantity;
      } else {
        state.cart.push({ product, quantity });
      }
    },
    quantityChange: (state, action) => {
      const { product, quantity } = action.payload.item;
      const existingItemIndex = state.cart.findIndex(
        (item) => item.product.id === product.id
      );
      if (existingItemIndex >= 0) {
        state.cart[existingItemIndex].quantity = quantity;
      }
    },
    removeToCart: (state, action) => {
      const { product } = action.payload.item;
      state.cart = state.cart.filter((item) => item.product.id !== product.id);
    },
    removeSelectedItems: (state) => {
      state.cart = state.cart.filter((item) => !item.isChecked);
    },
    toggleAllItems: (state, action) => {
      const selectAll = action.payload;
      state.cart = state.cart.map((item) => ({
        ...item,
        isChecked: selectAll,
      }));
    },
    toggleItem: (state, action) => {
      const productId = action.payload.productId;
      const itemIndex = state.cart.findIndex(
        (item) => item.product.id === productId
      );

      if (itemIndex !== -1) {
        state.cart[itemIndex].isChecked = !state.cart[itemIndex].isChecked;
      }
    },
  },
});

export const {
  login,
  logout,
  addToCart,
  quantityChange,
  removeToCart,
  removeSelectedItems,
  toggleAllItems,
  toggleItem,
} = userSlice.actions;
export default userSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoggedIn: false,
    userData: null,
    cart: [],
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        login: (state, action) => {
            state.isLoggedIn = true;
            state.userData = action.payload;
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
            state.cart = state.cart.filter(
                (item) => item.product.id !== product.id
            );
        },
    },
});

export const { login, logout, addToCart, quantityChange, removeToCart } =
    userSlice.actions;
export default userSlice.reducer;

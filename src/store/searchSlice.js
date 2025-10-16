import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isOpen: false,
    hasInput: false,
    data: [],
};

const searchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {
        searchOpen: (state) => {
            state.isOpen = true;
        },
        searchClose: (state) => {
            state.isOpen = false;
        },
        inputValid: (state, action) => {
            state.hasInput = action.payload.data.trim().length > 0;
        },
        inputClear: (state) => {
            state.hasInput = false;
        },
        searchDataPush: (state, action) => {
            const existing = state.data.find(
                (item) => item === action.payload.data
            );
            if (!existing) {
                state.data.unshift(action.payload.data);
                state.hasInput = false;
            }
        },
        searchDataRemove: (state, action) => {
            state.data = state.data.filter(
                (item) => item !== action.payload.data
            );
        },
        searchDataAllRemove: (state) => {
            state.data = [];
        },
    },
});

export const {
    searchOpen,
    searchClose,
    inputValid,
    inputClear,
    searchDataPush,
    searchDataRemove,
    searchDataAllRemove,
} = searchSlice.actions;
export default searchSlice.reducer;

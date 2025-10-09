import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isOpen: false,
    hasInput: false,
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
    },
});

export const { searchOpen, searchClose, inputValid, inputClear } =
    searchSlice.actions;
export default searchSlice.reducer;

import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    isOpen: false,
    modalType: null
}

const modalSlice = createSlice({
    name: "modal",
    initialState: initialState,
    reducers: {
        openModal: (state, action) => {
            state.isOpen = true;
            state.modalType = action.payload.type;
        },
        closeModal: (state) => {
            state.isOpen = false;
            state.modalType = null;
        },
    }
})

export const {openModal, closeModal} = modalSlice.actions;
export default modalSlice.reducer;
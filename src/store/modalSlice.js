import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  isOpen: false,
  modalType: null,
  data: null,
};

const modalSlice = createSlice({
    name: "modal",
    initialState: initialState,
    reducers: {
        openModal: (state, action) => {
            state.isOpen = true;
            state.modalType = action.payload.type;
            state.data = action.payload.data; 
        },
        closeModal: (state) => {
            state.isOpen = false;
            state.modalType = null;
            state.data = null;
        },
    }
})

export const {openModal, closeModal} = modalSlice.actions;
export default modalSlice.reducer;
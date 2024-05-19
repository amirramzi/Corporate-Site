import { createSlice } from "@reduxjs/toolkit";

const signupModalSlice = createSlice({
  name: "signupModal",
  initialState: { value: false },

  reducers: {
    openModal(state) {
      state.value = true;
    },
    closeModal(state) {
      state.value = false;
    },
  },
});

export const { openModal, closeModal } = signupModalSlice.actions;
export default signupModalSlice.reducer;

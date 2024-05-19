import { createSlice } from "@reduxjs/toolkit";

const SigninModalSlice = createSlice({
  name: "signinModal",
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

export const { openModal, closeModal } = SigninModalSlice.actions;
export default SigninModalSlice.reducer;

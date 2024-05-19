import { createSlice } from "@reduxjs/toolkit";
import { usersLength } from "./toggleSlice";

const usersSlice = createSlice({
  name: "users",
  initialState: { users: [], usersLength: 0 },
    
  reducers: {},
});

export const { openModal, closeModal } = usersSlice.actions;
export default usersSlice.reducer;

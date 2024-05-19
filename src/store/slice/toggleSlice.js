import { createSlice } from "@reduxjs/toolkit";

const toggleSlice = createSlice({
  name: "toggle",
  initialState: {
    darkMode: true,
    auth: false,
    loading: false,
    navbar: false,
    signinModal: false,
    sidebar: false,
  },

  reducers: {
    toggleDarkMode(state) {
      state.darkMode = !state.darkMode;
    },
    loginAuth(state) {
      state.auth = true;
    },
    logoutAuth(state) {
      state.auth = false;
    },
    startLoading(state) {
      state.loading = true;
    },
    stopLoading(state) {
      state.loading = false;
    },
    toggleNavbar(state) {
      state.navbar = !state.navbar;
    },
    toggleSidebar(state) {
      state.sidebar = !state.sidebar;
    },
  },
});

export const {
  toggleDarkMode,
  loginAuth,
  logoutAuth,
  startLoading,
  stopLoading,
  toggleNavbar,
  toggleSidebar,
  usersLength,
} = toggleSlice.actions;
export default toggleSlice.reducer;

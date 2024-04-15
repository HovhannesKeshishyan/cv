import { createSlice } from "@reduxjs/toolkit";
import { IAppMainSliceState } from "./types";

const selected_theme = localStorage.getItem("selected_theme");
const initialState: IAppMainSliceState = {
  theme: selected_theme === "light" ? "light" : "dark",
};

const appMainSlice = createSlice({
  name: "app_main_slice",
  initialState,
  reducers: {
    toggleTheme(state: IAppMainSliceState) {
      const new_theme = state.theme === "light" ? "dark" : "light";
      localStorage.setItem("selected_theme", new_theme);
      state.theme = new_theme;
    },
  },
});

export const { toggleTheme } = appMainSlice.actions;
export default appMainSlice.reducer;

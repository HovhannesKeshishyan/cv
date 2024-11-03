import { createSlice } from "@reduxjs/toolkit";
import { IAppMainSliceState } from "./types";

const selectedTheme = localStorage.getItem("selectedTheme");
const initialState: IAppMainSliceState = {
  theme: selectedTheme === "light" ? "light" : "dark",
};

const appMainSlice = createSlice({
  name: "appMainSlice",
  initialState,
  reducers: {
    toggleTheme(state: IAppMainSliceState) {
      const newTheme = state.theme === "light" ? "dark" : "light";
      localStorage.setItem("selectedTheme", newTheme);
      state.theme = newTheme;
    },
  },
});

export const { toggleTheme } = appMainSlice.actions;
export default appMainSlice.reducer;
